import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  ScrollView,
} from 'react-native';
import CustomKeyboard from '../../components/CustomKeyboard';
import { useDispatch, useSelector } from 'react-redux';

import * as calActions from 'app/store/actions/calActions';
import styles from './styles';

const oprData = ['+', '-', '/', 'x', '='];
const Calc: React.FC = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: IState) => state.themeReducer.isDark);
  const reducerValue = useSelector(
    (state) => state.calcReducer.calReducerValue,
  );
  const callCalc = (value) => dispatch(calActions.calculate(value));
  const updateReducerValue = (value) =>
    dispatch(calActions.updateCalValue(value));
  const setText = (value) => {
    updateReducerValue(value);
  };
  const isOperator = (val) => {
    let format = /[\(\)\+\-\*\/\x]/;
    return format.test(val);
  };
  const onOperatorPress = (val) => {
    if (val !== '=') {
      if (reducerValue !== '') {
        const lastValue = reducerValue[reducerValue.length - 1];
        if (isOperator(lastValue)) {
          updateReducerValue(reducerValue.replace(/.$/, val));
        } else {
          updateReducerValue(reducerValue + val);
        }
      }
    } else {
      const lastValue = reducerValue[reducerValue.length - 1];
      console.log('lastValue', lastValue, isOperator(lastValue), reducerValue);
      if (!isOperator(lastValue)) {
        const newValue = reducerValue.replaceAll('x', '*');
        callCalc(newValue);
        // let answer = eval(newValue);
        // answer = answer.toString();
        // updateReducerValue(answer);
      } else {
        alert('Invalid Operation!');
      }
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View
        style={
          isDark ? styles.textInputContainerDark : styles.textInputContainer
        }>
        <TextInput
          style={isDark ? styles.textInputStyleDark : styles.textInputStyle}
          value={reducerValue}
          autoFocus={true}
          multiline={true}
          onChangeText={setText}
          keyboardAppearance={isDark ? 'dark' : 'light'}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.oprContainer}>
        {oprData.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => onOperatorPress(item)}
              style={isDark ? styles.oprViewDark : styles.oprView}>
              <Text
                style={
                  isDark ? styles.operatorStyleDark : styles.operatorStyle
                }>
                {item}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={{ marginVertical: 16 }}>
        <CustomKeyboard
          isDark={isDark}
          onKeyAdd={(val) => {
            setText(reducerValue + val);
          }}
          onBackPress={() => {
            updateReducerValue(reducerValue.replace(/.$/, ''));
          }}
          clearAll={() => updateReducerValue('')}
        />
      </View>
    </ScrollView>
  );
};

export default Calc;
