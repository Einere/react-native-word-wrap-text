import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import {
  TextAndRendererList,
  TextRenderer,
  WordWrapText,
} from 'react-native-word-wrap-text';

const renderPlainText: TextRenderer = (token, index) => {
  return (
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
const textAndRendererList1: TextAndRendererList = [
  [
    'Lorem ipsum\ndolor sit amet, consectetur adipiscing elit. ',
    renderPlainText,
  ],
  ['Donec vitae nisl magna. ', renderPrimaryText],
  ['Nam eget metus ac neque tempus blandit. ', renderPlainText],
  ['Maecenas finibus elit in gravida pretium. ', renderPrimaryText],
  [
    'Nunc quis neque non nulla vulputate suscipit et sed orci. ',
    renderPlainText,
  ],
];

const textAndRendererList2: TextAndRendererList = [
  ['여름 장이란 애시당초에 글러서, 해는 아직 중천에 있건만', renderPlainText],
  [
    ' 장판은 벌써 쓸쓸하고 더운 햇발이 벌여놓은 전 휘장\n밑으로 등줄기를 훅훅 볶는다.',
    renderPrimaryText,
  ],
  [
    ' 마을 사람들은 거의 돌아간 뒤요, 팔리지 못한 나무꾼패가 길거리에 궁깃거리고들 있으나...',
    renderPlainText,
  ],
];

const textAndRendererList3: TextAndRendererList = [
  ['This library is easily customizable. ', renderPlainText],
  ['Now, it supports ', renderPrimaryText],
  ['\\n ', renderBoldText],
  ['for line-break. ', renderPrimaryText],
  ['thank for\nusing this library.', renderPlainText],
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>left align</Text>
      <WordWrapText
        textAndRendererList={textAndRendererList1}
        containerStyle={containerStyle.text}
      />
      <View style={containerStyle.padding} />
      <Text>center align</Text>
      <WordWrapText
        textAndRendererList={textAndRendererList2}
        containerStyle={[containerStyle.text, containerStyle.center]}
      />
      <View style={containerStyle.padding} />
      <Text>right align</Text>
      <WordWrapText
        textAndRendererList={textAndRendererList3}
        containerStyle={[containerStyle.text, containerStyle.flexEnd]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

const containerStyle = StyleSheet.create({
  text: {
    width: '80%',
    backgroundColor: 'lightgray',
    padding: 8,
  },
  center: {
    justifyContent: 'center',
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  padding: {
    height: 16,
  },
});

const textStyle = StyleSheet.create({
  plainText: {
    backgroundColor: 'lightblue',
    borderRightWidth: 1,
  },
  primaryText: {
    backgroundColor: 'lightpink',
    borderRightWidth: 1,
  },
  boldText: {
    backgroundColor: 'lightgreen',
    fontWeight: 'bold',
    borderRightWidth: 1,
  },
});
