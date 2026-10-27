import java.util.*;

public class ConvertNumberToReversedArrayOfDigits {
    public static int[] numberToReversedArrayOfDigits(long n) {
        return new StringBuilder(Long.toString(n))
                .reverse()
                .chars()
                .map(Character::getNumericValue)
                .toArray();
    }

    public static void main(String[] args) {
        System.out.print(Arrays.toString(numberToReversedArrayOfDigits(12345)));
    }
}
