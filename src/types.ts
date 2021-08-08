import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type TextRenderer = (token: string, index: number) => ReactNode;
export type TextAndRenderer = [string, TextRenderer];
export type TextAndRendererList = TextAndRenderer[];
export type TokensAndRenderer = [string[], TextRenderer];

export type LineBreakParser = (
  textAndRenderer: TextAndRenderer
) => TextAndRenderer | TextAndRendererList;
export type Grouper = (
  acc: TextAndRendererList,
  textOrRenderer: string | TextRenderer
) => TextAndRendererList;
export type WhiteSpateParser = (
  textAndRenderer: TextAndRenderer
) => TokensAndRenderer;

export interface WordWrapTextProp {
  textAndRendererList: TextAndRendererList;
  containerStyle: StyleProp<ViewStyle>;
}
