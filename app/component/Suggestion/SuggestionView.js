import React, {Component} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import { SMALLEST_BORDER_WIDTH} from '../../lib/platform';
import {Button} from '../Button/Button';
import {STColor} from '../../share/styles';

class SuggestionView extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    return (
      <View style={styles.suggestionWrap}>
        <TextInput
          style={styles.input}
          multiline
          placeholder="Please input a complaint…"
        />

        <View style={styles.Line} />
        <View style={styles.buttonView}>
          <Button
            wrap={styles.buttonLeft}
            title="CONFIRM TO SUBMIT"
            full
            size={14}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  suggestionWrap: {
    flex: 1,
  },
  Line: {
    paddingHorizontal: 14,
    borderBottomWidth: SMALLEST_BORDER_WIDTH,
    borderBottomColor: STColor.LINE_COLOR,
  },
  input: {
    height: 204,
    backgroundColor: 'white',
    textAlign: 'right',
    textAlignVertical: 'top',
    paddingHorizontal: 14,
    paddingVertical: 16,
  },
  buttonView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingHorizontal: 36,
    paddingVertical: 20,
  },
});

function mapStateTopProps (state) {
  return {};
}

function mapDispatchToProps (dispatch) {
  return {};
}

export default connect (mapStateTopProps, mapDispatchToProps) (SuggestionView);
