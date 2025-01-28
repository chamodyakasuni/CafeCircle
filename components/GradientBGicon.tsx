import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SPACING } from '../theme/theme';
import { Ionicons } from '@expo/vector-icons';
import CustomIcon from './CustomIcon';

interface GradientBGiconProps {
        name: string;
        color: string;
        size: number;
}

const GradientBGicon:React.FC<GradientBGiconProps> = ({name,color,size}) => {
  return (
    <View style={styles.Container}>
          <LinearGradient 
          start={{x: 0, y: 0}}
            end={{x: 1, y: 1}}
          style={styles.LinearGradientBG} 
          colors={[COLORS.primaryGreyHex,COLORS.primaryBlackHex]}>
            <Ionicons name={name as any} size={size} color={color}/>
          </LinearGradient>
    </View>
  )
}
const styles = StyleSheet.create({
    Container: {
        borderWidth: 2,
        borderColor: COLORS.primaryDarkGreyHex,
        borderRadius: SPACING.space_12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primaryDarkGreyHex,
        overflow: 'hidden',
    },
    LinearGradientBG: {
        height: SPACING.space_36,
        width: SPACING.space_36,
        alignItems: 'center',
        justifyContent: 'center',
    },
})


export default GradientBGicon

