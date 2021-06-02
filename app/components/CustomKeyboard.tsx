import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { IThemeState } from 'app/models/reducers/theme';

interface IState {
  themeReducer: IThemeState;
}
const row1 = ['1', '2', '3'];
const row2 = ['4', '5', '6'];
const row3 = ['7', '8', '9'];
const row4 = ['.', '0', 'C'];
const Keyboard: React.FC = (props) => {
  const { isDark, onKeyAdd, onBackPress,clearAll } = props;
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        {row1.map((item) => {
          return (
            <TouchableOpacity
              style={isDark ? styles.oprViewDark : styles.oprView}
              onPress={() => onKeyAdd(item)}>
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
      <View style={styles.rows}>
        {row2.map((item) => {
          return (
            <TouchableOpacity
              style={isDark ? styles.oprViewDark : styles.oprView}
              onPress={() => onKeyAdd(item)}>
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
      <View style={styles.rows}>
        {row3.map((item) => {
          return (
            <TouchableOpacity
              style={isDark ? styles.oprViewDark : styles.oprView}
              onPress={() => onKeyAdd(item)}>
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
      <View style={styles.rows}>
        {row4.map((item) => {
          return (
            <TouchableOpacity
              style={isDark ? styles.oprViewDark : styles.oprView}
              onLongPress={()=>clearAll()}
              onPress={() => (item !== 'C' ? onKeyAdd(item) : onBackPress())}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
  },
  firstRow: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  rows: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 24,
  },
  oprView: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: '#092e71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  oprViewDark: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: '#f6dd98',
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatorStyleDark: {
    color: 'white',
    fontSize: 25,
  },
  operatorStyle: {
    fontSize: 25,
    color: 'white',
  },
});

export default Keyboard;
