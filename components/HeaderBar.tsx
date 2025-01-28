import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';
import GradientBGicon from './GradientBGicon';
import ProfilePic from './ProfilePic';
interface HeaderBarProps {
    title?: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({title}) => {
  return (
    <View style={styles.HeaderBarContainer}>
      <GradientBGicon 
           name='menu' 
           color={COLORS.primaryLightGreyHex} size={FONTSIZE.size_16}/>   
      <Text style={styles.HeaderText}></Text>
      <ProfilePic />
    </View>
  )
}
const styles = StyleSheet.create({

    HeaderBarContainer: {
        padding:SPACING.space_30,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:SPACING.space_30,
    },

    HeaderText: {
        fontFamily:FONTFAMILY.poppins_semibold,
        fontSize:FONTSIZE.size_20,
        color:COLORS.primaryWhiteHex,
    },
})


export default HeaderBar

