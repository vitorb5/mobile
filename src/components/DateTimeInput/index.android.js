import React, {useState} from 'react';
import {TouchableOpacity, View, Button, Platform, DatePickerAndroid, TimePickerAndroid} from 'react-native';
import styles from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';

//import iconCalendar from '../../assets/calendar.png';
//import iconClock from '../../assets/clock.png';

export  default function DataTimeInputAndroid({type}){
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, selecioneData] = useState('date');
    const [show, dataSeleciona] = useState(false);

    
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };
    
      return (
        <View>
          <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      );
    };