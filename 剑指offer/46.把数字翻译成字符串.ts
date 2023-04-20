function translateNum(num: number): number {
  if(num>=0&&num<=9) return 1;
  else if(num>=10&&num<=25) return 2;
  else if(num>25&&num<100) return 1;
  else{
    let pre1 = ~~(num/100),pre2 = ~~(num/10);
    let rest1 = num%100;
    return translateNum(pre2)+((rest1<=25&&rest1>=10)?translateNum(pre1):0);
  }
};
//12258 = 122+58|1225+8 = 5 =8
//122 = 1+22|12+2 = 1+2 = 3
//1225 = 12+25|122+5 = 2+3 = 5
//506 = 5+06|50+6