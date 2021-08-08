import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type {
  WordWrapTextProp,
  TextAndRendererList,
  TextRenderer,
  LineBreakParser,
  Grouper,
  WhiteSpateParser,
} from '../types';

const Separator: TextRenderer = (token, i) => {
  return <View key={`${token}${i}`} style={_containerStyle.separator} />;
};
const isTextAndRenderListTruthy = ([text, renderer]: unknown[]) =>
  typeof text === 'string' && renderer instanceof Function;

const parseLineBreak: LineBreakParser = ([text, renderer]) => {
  if (text.includes('\n')) {
    const regExp = new RegExp(/(\n)/);
    const tokens = text.split(regExp);

    const textAndRendererList: TextAndRendererList = tokens.map((token) =>
      token === '\n' ? [token, Separator] : [token, renderer]
    );

    return textAndRendererList;
  }

  return [text, renderer];
};

const groupToTextAndRenderer: Grouper = (acc, textOrRenderer) => {
  if (typeof textOrRenderer === 'string') {
    acc.push([textOrRenderer, () => <View />]);
  } else {
    const lastIndex = acc.length - 1;
    acc[lastIndex][1] = textOrRenderer;
  }
  return acc;
};

const parseWhiteSpace: WhiteSpateParser = ([text, renderer]) => {
  const regExp = new RegExp(/(?<=\s)/);
  const tokens = text.split(regExp);

  return [tokens, renderer];
};

export function WordWrapText(props: WordWrapTextProp) {
  const { textAndRendererList, containerStyle = {} } = props;

  if (!Array.isArray(textAndRendererList)) {
    return null;
  }
  const textComponents = textAndRendererList
    .filter(isTextAndRenderListTruthy)
    .map(parseLineBreak)
    .flat(2)
    .reduce(groupToTextAndRenderer, [])
    .map(parseWhiteSpace)
    .map(([tokens, renderer]) => tokens.map(renderer));

  const composedContainerStyle = StyleSheet.flatten([
    _containerStyle.container,
    containerStyle,
  ]);

  return <View style={composedContainerStyle}>{textComponents}</View>;
}

const _containerStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  separator: {
    flexBasis: '100%',
  },
});
