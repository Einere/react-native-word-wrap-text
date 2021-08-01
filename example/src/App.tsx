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
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    renderPlainText,
  ],
  ['Donec vitae nisl magna. ', renderPrimaryText],
  [
    'Nam eget metus ac neque tempus blandit. Maecenas finibus elit in gravida pretium. ',
    renderPlainText,
  ],
  [
    'Nunc quis neque non nulla vulputate suscipit et sed orci. Integer libero ante, ultricies sit amet nulla vitae, tincidunt egestas eros. ',
    renderPrimaryText,
  ],
  ['Quisque aliquet fermentum nulla, et tempor libero. ', renderPlainText],
];

const textAndRendererList2: TextAndRendererList = [
  [
    '여름 장이란 애시당초에 글러서, 해는 아직 중천에 있건만 장판은 벌써 쓸쓸하고 더운 햇발이 벌여놓은 전 휘장 밑으로 등줄기를 훅훅 볶는다. ',
    renderPlainText,
  ],
  [
    '마을 사람들은 거의 돌아간 뒤요, 팔리지 못한 나무꾼패가 길거리에 궁깃거리고들 있으나, 석유병이나 받고 고깃마리나 사면 족할 이 축들을 바라고 언제까지든지 버티고 있을 법은 없다. ',
    renderPrimaryText,
  ],
  [
    '칩칩스럽게 날아드는 파리떼도 장난꾼 각다귀들도 귀찮다. 얽음뱅이요 왼손잡이인 드팀전의 허생원은 기어이 동업의 조선달을 나꾸어보았다.',
    renderPlainText,
  ],
];

const textAndRendererList3: TextAndRendererList = [
  ['This library can easily customize. ', renderPlainText],
  ['But now, no support ', renderPrimaryText],
  ['\\n ', renderBoldText],
  ['for_line_break. ', renderPrimaryText],
  ['thank for using this library.', renderPlainText],
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>left align</Text>
      <WordWrapText
        textAndRenderList={textAndRendererList1}
        containerStyle={containerStyle.text}
      />
      <View style={containerStyle.padding} />
      <Text>center align</Text>
      <WordWrapText
        textAndRenderList={textAndRendererList2}
        containerStyle={[containerStyle.text, containerStyle.center]}
      />
      <View style={containerStyle.padding} />
      <Text>right align</Text>
      <WordWrapText
        textAndRenderList={textAndRendererList3}
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
