function bonusTime(salary, bonus) {
    let bonusMoney = salary * 10;
    let strBonusMoney = bonusMoney.toString();
    let strSalary = salary.toString();
    if (bonus === true)
      return ('£' + strBonusMoney);
    else 
      return ('£' + strSalary);
  }
  
  