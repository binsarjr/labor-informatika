// Javascript program for Binary To Gray
// and Gray to Binary conversion

import { xor_c } from './logicState';

// Helper function to flip the bit
function flip(c: string) {
	return c == '0' ? '1' : '0';
}

// Function to convert binary string
// to gray string
export function binarytoGray(binary: string) {
	let gray = '';

	// MSB of gray code is same
	// as binary code
	gray += binary[0];

	// Compute remaining bits, next bit
	// is computed by doing XOR of previous
	// and current in Binary
	for (let i = 1; i < binary.length; i++) {
		// Concatenate XOR of previous bit
		// with current bit
		gray += xor_c(binary[i - 1], binary[i]);
	}
	return gray;
}

// Function to convert gray code string
// to binary string
export function graytoBinary(gray: string) {
	let binary = '';

	// MSB of binary code is same
	// as gray code
	binary += gray[0];

	// Compute remaining bits
	for (let i = 1; i < gray.length; i++) {
		// If current bit is 0, concatenate
		// previous bit
		if (gray[i] == '0') binary += binary[i - 1];
		// Else, concatenate invert of
		// previous bit
		else binary += flip(binary[i - 1]);
	}
	return binary;
}
