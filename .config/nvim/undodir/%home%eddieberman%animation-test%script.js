Vim�UnDo� ��e�r'��IO�j�M�D���,�fَ��Q�   P                  !       !   !   !    e<�   
 _�                     (       ����                                                                                                                                                                                                                                                                                                                                                             e;%F    �   '   )   @              }, 10);5��    '                     B                     5�_�                    5   &    ����                                                                                                                                                                                                                                                                                                                                                             e;�I    �   4   6   @      ,        let bar = "".padStart(count, '█');�   5   6   @    �   5   6   @    �   5   6   @    �   5   6   @    5��    4   &                  �                     5�_�                    5   )    ����                                                                                                                                                                                                                                                                                                                                                             e;��     �   4   6   @      8        let bar = "".padStart(count, '█████');5��    4   )                  �                     5�_�                    5   /    ����                                                                                                                                                                                                                                                                                                                                                             e;��    �   4   6   @      2        let bar = "".padStart(count, '███');5��    4   )                  �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                            e< w     �         @          typeCount[selectedType]++;5��                         �                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                            e< y    �         @          typeCount[selectedType] ++;5��                        �                    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                            e<�     �      #   A       �         A    �         @       5��                                               �                                        ~      5�_�      	              "        ����                                                                                                                                                                (                                                                                                                                                           "           1           V        e<�    �   !   "              function animateText() {   #    clearTimeout(animationTimeout);       =    let typeIndex = Math.floor(Math.random() * types.length);   (    let selectedType = types[typeIndex];   !    typeCount[selectedType] += 5;       >    let textElement = document.getElementById("animatedText");   <    textElement.textContent = "";  // Clear the current text   L    textElement.classList.add('typing');  // Add typing class for the cursor   5    typeSentence("Sampled Type: " + selectedType, 0);       #    // Update the Unicode bar chart       updateBarChart();   }5��    !                      �                    5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                            e<=     �      !   B          }, 500);5��                        �                    5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                            e<}     �      *   B       �         B    5��                                        �      5�_�   
                 &       ����                                                                                                                                                                /                                                                                                                                                                                            e<�     �   %   '   [              }, 500);5��    %                    �                    5�_�                    )        ����                                                                                                                                                                /                                                                                                                                                           )           :          V       e<�    �   (   )              function animateText() {   #    clearTimeout(animationTimeout);       =    let typeIndex = Math.floor(Math.random() * types.length);   (    let selectedType = types[typeIndex];   J    typeCount[selectedType] += 5;  // Increment by 5 for the selected type       >    let textElement = document.getElementById("animatedText");   <    textElement.textContent = "";  // Clear the current text   L    textElement.classList.add('typing');  // Add typing class for the cursor   5    typeSentence("Sampled Type: " + selectedType, 0);       G    // Introduce a delay of 500ms before updating the Unicode bar chart       setTimeout(function() {           updateBarChart();       }, 1000);   }5��    (                      �      �              5�_�                           ����                                                                                                                                                                                                                                                                                                                                                            e<�     �          I      bconst types = ["int", "float", "str", "list", "dict", "tuple", "set", "bool", "bytes", "complex"];5��                                                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                            e<�     �          I      econst types = ["int   ", "float", "str", "list", "dict", "tuple", "set", "bool", "bytes", "complex"];5��                                                5�_�                       '    ����                                                                                                                                                                                                                                                                                                                                                            e<�     �          I      fconst types = ["int   ", "float ", "str", "list", "dict", "tuple", "set", "bool", "bytes", "complex"];5��        '                  '                      5�_�                       2    ����                                                                                                                                                                                                                                                                                                                                                            e<�     �          I      iconst types = ["int   ", "float ", "str   ", "list", "dict", "tuple", "set", "bool", "bytes", "complex"];5��        2                  2                      5�_�                       <    ����                                                                                                                                                                                                                                                                                                                                                            e<�     �          I      kconst types = ["int   ", "float ", "str   ", "list  ", "dict", "tuple", "set", "bool", "bytes", "complex"];5��        <                  <                      5�_�                       G    ����                                                                                                                                                                                                                                                                                                                                                            e<�     �          I      mconst types = ["int   ", "float ", "str   ", "list  ", "dict  ", "tuple", "set", "bool", "bytes", "complex"];5��        G                  G                      5�_�                       O    ����                                                                                                                                                                                                                                                                                                                                                            e<�     �          I      nconst types = ["int   ", "float ", "str   ", "list  ", "dict  ", "tuple ", "set", "bool", "bytes", "complex"];5��        O                  O                      5�_�                       Z    ����                                                                                                                                                                                                                                                                                                                                                            e<�     �          I      qconst types = ["int   ", "float ", "str   ", "list  ", "dict  ", "tuple ", "set   ", "bool", "bytes", "complex"];5��        Z                  Z                      5�_�                       e    ����                                                                                                                                                                                                                                                                                                                                                            e<�    �          I      sconst types = ["int   ", "float ", "str   ", "list  ", "dict  ", "tuple ", "set   ", "bool  ", "bytes", "complex"];5��        e                  e                      5�_�                    &       ����                                                                                                                                                                                                                                                                                                                                                            e<�    �   %   '   I              }, 1000);5��    %                    �                    5�_�                           ����                                                                                                                                                                                                                                                                                                                                                            e<o     �          I      tconst types = ["int   ", "float ", "str   ", "list  ", "dict  ", "tuple ", "set   ", "bool  ", "bytes ", "complex"];5��                                                5�_�                           ����                                                                                                                                                                                                                                                                                                                                                            e<r     �          I      qconst types = ["int", "float ", "str   ", "list  ", "dict  ", "tuple ", "set   ", "bool  ", "bytes ", "complex"];5��                                                5�_�                       #    ����                                                                                                                                                                                                                                                                                                                                                            e<u     �          I      pconst types = ["int", "float", "str   ", "list  ", "dict  ", "tuple ", "set   ", "bool  ", "bytes ", "complex"];5��        #                  #                      5�_�                       +    ����                                                                                                                                                                                                                                                                                                                                                            e<w     �          I      mconst types = ["int", "float", "str", "list  ", "dict  ", "tuple ", "set   ", "bool  ", "bytes ", "complex"];5��        +                  +                      5�_�                       3    ����                                                                                                                                                                                                                                                                                                                                                            e<x     �          I      kconst types = ["int", "float", "str", "list", "dict  ", "tuple ", "set   ", "bool  ", "bytes ", "complex"];5��        3                  3                      5�_�                       <    ����                                                                                                                                                                                                                                                                                                                                                            e<z     �          I      iconst types = ["int", "float", "str", "list", "dict", "tuple ", "set   ", "bool  ", "bytes ", "complex"];5��        <                  <                      5�_�                       C    ����                                                                                                                                                                                                                                                                                                                                                            e<{     �          I      hconst types = ["int", "float", "str", "list", "dict", "tuple", "set   ", "bool  ", "bytes ", "complex"];5��        C                  C                      5�_�                       K    ����                                                                                                                                                                                                                                                                                                                                                            e<}     �          I      econst types = ["int", "float", "str", "list", "dict", "tuple", "set", "bool  ", "bytes ", "complex"];5��        K                  K                      5�_�                        T    ����                                                                                                                                                                                                                                                                                                                                                            e<~   	 �          I      cconst types = ["int", "float", "str", "list", "dict", "tuple", "set", "bool", "bytes ", "complex"];5��        T                 T                     5�_�      !               8        ����                                                                                                                                                                                                                                                                                                                                                            e<�     �   8   L   J       �   9   :   J    �   7   :   I       5��    7                      s                     �    8                      t              �      5�_�                   !   K        ����                                                                                                                                                                                                                                                                                                                           K           V           V        e<�   
 �   J   K              function updateBarChart() {       let chart = "";           for (const type of types) {   $        let count = typeCount[type];   ,        let bar = "".padStart(count, '█');   %        chart += `${type}: ${bar}\n`;       }       @    document.getElementById("unicodeChart").textContent = chart;   }5��    J                      o                    5��