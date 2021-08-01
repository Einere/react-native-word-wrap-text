import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import type { TokensAndRenderer, WordWrapTextProp } from '../types';

export function WordWrapText(props: WordWrapTextProp) {
  const { textAndRenderList, containerStyle = {} } = props;

  if (!Array.isArray(textAndRenderList)) {
    return null;
  }

  const textComponents = textAndRenderList
    .filter(([text, renderer]) => {
      return typeof text === 'string' && renderer instanceof Function;
    })
    .map(([text, renderer]): TokensAndRenderer => {
      const regExp = new RegExp(/(?<=\s)/);
      const tokens = text.split(regExp);

      return [tokens, renderer];
    })
    .map(([tokens, renderer]) => {
      return tokens.map(renderer);
    });

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
});
