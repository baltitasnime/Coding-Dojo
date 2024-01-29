import java.util.ArrayList;

public class PuzzleJava {
    public static ArrayList<Integer> getTenRolls(){
        ArrayList<Integer> array = new ArrayList<>();
        for(int i =0; i <10 ; i++){
            int random = (int) (Math.random()*20) + 1;
            if(random!=0){
                array.add(random);
            }

        }
        return array;
    }

    public static String generateRandomLetter() {
        String[] alphabet = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};

        int randomIndex = (int) (Math.random() * 26);
        String randomLetter = alphabet[randomIndex];

        return randomLetter;
    }
    public static String generatePassword(){
        String password ="";
        for(int i =0;i<8 ; i++){
            password+=generateRandomLetter();
        }
        return password;
    }
    public static String[] getNewPasswordSet(int length){
        String[] array = new String[length];
        for(int i = 0; i<length ; i++){
            array[i] = generatePassword();
        }
        return array;
    }
}
