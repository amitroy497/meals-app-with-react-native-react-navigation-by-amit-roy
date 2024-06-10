import { StyleSheet, Text, View } from 'react-native';

export const MealDetails = ({
	affordability,
	complexity,
	duration,
	style,
	textStyle,
}) => {
	return (
		<View style={[styles.details, style]}>
			<Text style={[styles.detailItem, textStyle]}>{duration}</Text>
			<Text style={[styles.detailItem, textStyle]}>
				{complexity.toUpperCase()}
			</Text>
			<Text style={[styles.detailItem, textStyle]}>
				{affordability.toUpperCase()}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});
