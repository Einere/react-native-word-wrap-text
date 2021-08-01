# react-native-word-wrap-text

[!sample image](./asset/image/sample.png)

Simple word-wrapped text component for React Native.

## Features

1. Support TypeScript

## Next Features

1. line break by parsing `\n` in string

## Requirements

> 🚨 This module using lookbehind regular expression, you **must enable hermes**. Hermes makes you using ESnext features.

Enable hermes like below.

```gradle
// /android/app.build.gradle

project.ext.react = [
    enableHermes: true,  // modify to true
]
```

and clean gradle by run command in `/android`
```sh
./gradlew clean
```

## Installation

```sh
npm install react-native-word-wrap-text
```
or
```sh
yarn add react-native-word-wrap-text
```

## Usage

```tsx
import {Text, View} from 'react-native';
import {
  TextAndRendererList,
  TextRenderer,
  WordWrapText,
} from 'react-native-word-wrap-text';

const renderPlainText: TextRenderer = (token, index) => {
  return (
    // it's important to assign key props to root component
    <Text key={index} style={textStyle.plainText}>
      {token}
    </Text>
  );
};
const renderPrimaryText: TextRenderer = (token, index) => {
  return (
    <Text key={index} style={textStyle.primaryText}>
      {token}
    </Text>
  );
};
const renderBoldText: TextRenderer = (token, index) => {
  return (
    <Text key={index} style={textStyle.boldText}>
      {token}
    </Text>
  );
};

// if use same renderer, merge to one string
const textAndRendererList: TextAndRendererList = [
  ['This library can easily customize. ', renderPlainText],
  ['But now, no support ', renderPrimaryText],
  ['\\n ', renderBoldText],
  ['for_line_break. ', renderPrimaryText],
  ['thank for using this library.', renderPlainText],
];

function SomeComponent (props) {
  // ...

  return (
    <View>
      <WordWrapText
        textAndRenderList={textAndRendererList}
        containerStyle={containerStyle.text}
      />
    </View>
  );
}
```

> 🚨 You have to assign `key` prop to root component at TextRenderer

## Props and Types

### Props

| Props             	| type                 	| note                            	                            	  |
|-------------------	|----------------------	|------------------------------------------------------------------	|
| textAndRenderList 	| TextAndRendererList  	|                                 	                            	  |
| containerStyle    	| StyleProp\<ViewStyle\> 	| [View Style Props](https://reactnative.dev/docs/view-style-props) |

### Types

| Types               	| value                                       	| note                          	|
|---------------------	|---------------------------------------------	|-------------------------------	|
| TextRenderer        	| (token: string, index: number) => ReactNode 	| Similar to function component  	|
| TextAndRenderer     	| [string, TextRenderer]                      	| string and TextRenderer tuple 	|
| TextAndRendererList 	| TextAndRenderer[]                           	| 2D array                      	|

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository.

## License

MIT
