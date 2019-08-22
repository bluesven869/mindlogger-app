import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { Markdown } from '../../components/core/Markdown';
import { SubHeading } from '../../components/core/SubHeading';
import DataIcon from '../../components/Icons/Data';
import { colors } from '../../themes/colors';

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: 10,
  },
});

// eslint-disable-next-line
class DataInvite extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.main}>
        <DataIcon color={colors.primary} width="100" height="100" />
        <SubHeading>Access to your Data</SubHeading>
        <Text style={{ color: colors.tertiary, textAlign: 'justify' }}>
          {`
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Fusce dapibus vitae diam ac aliquam.
Nullam et lobortis sem, non semper turpis.
Curabitur faucibus massa metus, et pulvinar lacus tempus non.
Etiam convallis nulla nec felis posuere cursus.
Nulla id blandit tortor. Curabitur rhoncus, tortor eget tristique imperdiet,
justo augue consequat erat, id semper justo ex sit amet mauris.
Aenean non lorem vulputate, fringilla sem mattis, porttitor eros.
Duis nec ligula vitae lectus blandit bibendum. Sed pretium convallis imperdiet. 
Aenean in ex non urna venenatis malesuada. Suspendisse pulvinar purus non tristique gravida.
          `}
        </Text>
      </ScrollView>
    );
  }
}

export default DataInvite;
