Vim�UnDo� v�u����H�����ygI$�U)�E�oNf�j   %                 %       %   %   %    eB�H    _�                             ����                                                                                                                                                                                                                                                                                                                                                             eB�[     �                5��                                                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             eB�_    �               use rand::Rng;5��                                               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             eB��     �                5��                                               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             eB��    �                   �             �                   5��                                             �                     %   #              y       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        eB�%     �                    io::stdin()           .read_line(&mut guess)   '        .expect("Failed to read line");       %    println!("You guessed: {guess}");5��                                ~               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                  V        eB�;    �      	          �             5��                          L                      �                     6   P               r       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             eB�y     �                use std::io;5��                                                  5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             eB�z     �                 5��                                                  �                      	                 	       �                                              5�_�      
           	          ����                                                                                                                                                                                                                                                                                                                                                             eB�    �                use std::cmp::ordering;5��                                              5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                  V        eB��     �                "    println!("Guess the number!");   >    let secret_number = rand::thread_rng().gen_range(1..=100);       6    println!("The secret number is: {secret_number}");   )    println!("Please input your guess.");       "    let mut guess = String::new();           io::stdin()           .read_line(&mut guess)   '        .expect("Failed to read line");       %    println!("You guessed: {guess}");       5��                          A       l              5�_�   
                         ����                                                                                                                                                                                                                                                                                                                                                  V        eB��     �                �             5��                          A                      �                     0   E               �       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                  V        eB��     �               fn main() {   !println!("You guessed: {guess}");�               &     println!("You guessed: {guess}");5��                          A                      �                         @                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V        eB��     �               ,fn main() {println!("You guessed: {guess}");5��                         @                      �                          A                      5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V        eB��     �               %    println!("You guessed: {guess}");5��                          A                      �                         A                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V        eB��     �                �             5��                      '   A               A      5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                V        eB��     �               '        .expect("Failed to read line");5��       '                 �              	       �                         �                    �                          �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V        eB�1     �                   �             �                5��                                               �                       N                 N       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V        eB�:     �               N        let guess: u32 = guess.trim().parse().expect("Please type a number!");5��                                              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V        eB�;     �                J    let guess: u32 = guess.trim().parse().expect("Please type a number!");5��                                K               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V        eB�>    �             �             5��                          �              K       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                V       eB�|     �                "    let mut guess = String::new();           io::stdin()           .read_line(&mut guess)   '        .expect("Failed to read line");       J    let guess: u32 = guess.trim().parse().expect("Please type a number!");   %    println!("You guessed: {guess}");       %    match guess.cmp(&secret_number) {   1        Ordering::Less => println!("Too small!"),   2        Ordering::Greater => println!("Too big!"),   0        Ordering::Equal => println!("You win!"),5��                                �              5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       eB�~     �                 }5��                                               5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       eB�    �                �             5��                                        �      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             eB�N     �   
              5��    
                   
   �               
       5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       eB�X     �                )    println!("Please input your guess.");       // --snip--       "    let mut guess = String::new();           io::stdin()           .read_line(&mut guess)   '        .expect("Failed to read line");       J    let guess: u32 = guess.trim().parse().expect("Please type a number!");       %    println!("You guessed: {guess}");       %    match guess.cmp(&secret_number) {   1        Ordering::Less => println!("Too small!"),   2        Ordering::Greater => println!("Too big!"),   0        Ordering::Equal => println!("You win!"),       }5��                         �                     �                                             �                         *                    �                         R                    �                         f                    �                         �                    �                         �                    �                                             �                         1                    �                         [                    �                         �                    �                         �                    �                         �                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                V       eB�[    �                 5��                                               5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             eB��     �                4            Ordering::Equal => println!("You win!"),5��                         �                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             eB��     �                5            Ordering::Equal => {println!("You win!"),5��                         �                     �                         �                    5�_�                       %    ����                                                                                                                                                                                                                                                                                                                                                             eB��     �         !      %                println!("You win!"),5��       %                                      �                                              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             eB��    �          "                      break;5��                        %                     �                         6                     �                         &                    5�_�                        $    ����                                                                                                                                                                                                                                                                                                                                                             eB��   	 �         #      %                println!("You win!"),5��       $                                     5�_�      !                  -    ����                                                                                                                                                                                                                                                                                                                                                             eB��     �         #      N        let guess: u32 = guess.trim().parse().expect("Please type a number!");5��       -       !          �      !              5�_�       "           !      /    ����                                                                                                                                                                                                                                                                                                                                                             eB��     �         #      /        let guess: u32 = guess.trim().parse() {5��       /                 �              	       �                         �                    �                        �                    5�_�   !   #           "          ����                                                                                                                                                                                                                                                                                                                                                             eB��     �         $                  Ok(num) => num,5��                                             �                                              5�_�   "   $           #          ����                                                                                                                                                                                                                                                                                                                                                             eB��   
 �         %                  Err(_) => continue,5��                        !                     �                         .                     �                         "                    �       	                  +                     5�_�   #   %           $          ����                                                                                                                                                                                                                                                                                                                                                             eB�    �         &      /        let guess: u32 = guess.trim().parse() {5��                         �                     5�_�   $               %   
        ����                                                                                                                                                                                                                                                                                                                                                             eB�G    �   	   
          6    println!("The secret number is: {secret_number}");5��    	                      �       7               5��