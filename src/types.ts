import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export type TextRenderer = (token: string, index: number) => ReactNode;
export type TextAndRenderer = [string, TextRenderer];
export type TextAndRendererList = TextAndRenderer[];
export type TokensAndRenderer = [string[], TextRenderer];

export interface WordWrapTextProp {
  textAndRenderList: TextAndRendererList;
  containerStyle: StyleProp<ViewStyle>;
}
