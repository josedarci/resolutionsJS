function solution(words) {
    let count = 0;
    
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words.length; j++) {
        for (let k = 0; k < words.length; k++) {
          for (let l = 0; l < words.length; l++) {
            if (i !== j && i !== k && i !== l && j !== k && j !== l && k !== l) {
              count += check(words[i], words[j], words[k], words[l]);
            }
          }
        }
      }
    }
    
    return count;
  }
  
  function check(a, b, c, d) {
    let count = 0;
    
    for (let a1 = 0; a1 < a.length; a1++) {
      for (let a2 = a1 + 2; a2 < a.length; a2++) {
        for (let b1 = 0; b1 < b.length; b1++) {
          for (let b2 = b1 + 2; b2 < b.length; b2++) {
            for (let c1 = 0; c1 < c.length; c1++) {
              for (let d1 = 0; d1 < d.length; d1++) {
                const c2 = c1 + (a2 - a1);
                const d2 = d1 + (b2 - b1);
                
                if (c2 < c.length && d2 < d.length) {
                  if (
                    a.charAt(a1) === b.charAt(b1) &&
                    a.charAt(a2) === d.charAt(d1) &&
                    c.charAt(c1) === b.charAt(b2) &&
                    c.charAt(c2) === d.charAt(d2)
                  ) {
                    count++;
                  }
                }
              }
            }
          }
        }
      }
    }
    
    return count;
  }
  /* 
  f                         f                             f
  o                     c r o s s w o r d     c r o s s w o r d
c r o s s w o r d           r   o                   q     r
  m   q                     m   m                   u     m
  a   u            ;  s q u a r e          ;        a     a
  t   a                     t   t                   r     t
  i   r                     i   h             s o m e t h i n g
s o m e t h i n g           o   i                         o
  n                         n   n                         n
                                g                               
                                                              
    c         s               s                                      
f o r m a t i o n       c     q               c         s          
    o         m         r     u               r         o      
    s q u a r e       f o r m a t i o n       o         m            
    s         t    ;    s     r            ;  s q u a r e                  
    w         h         s o m e t h i n g     s         t         
    o         i         w                     w         h     
    r         n         o                   f o r m a t i o n            
    d         g         r                     r         n         
                        d                     d         g             

  
  
  
  */