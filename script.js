

function calculateTaxAmount(income) {
    const maxPercentage = 30;
    const minimumAmount = 50;
    const slabs = [
      { income: 3000, taxPercentage: 0 },
      { income: 6000, taxPercentage: 5 },
      { income: 10000, taxPercentage: 15 },
      { income: 20000, taxPercentage: 25 },
    ];
    if (income <= slabs[0].income) return 0;
  
    let totalTax = 0;
    income -= slabs[0].income;
  
    if (income > 0) {
      let taxableSallary = income;
      for (let i = 0; i < slabs.length - 1; i++) {
        if (taxableSallary < 1) {
          break;
        }
        totalTax += getTaxCalculated(slabs,taxableSallary,i);
        taxableSallary -= slabs[i + 1].income - slabs[i].income;
      }
    }
  
    function getTaxCalculated(slabs, taxableSallary,i) {
        // if more than current slab -> calculate only for current slab
        // else calculate on income
        let currentSlabIncome = slabs[i + 1].income - slabs[i].income;
        let calculationAmount = 0;
        let Tax = 0;
        if (taxableSallary <= currentSlabIncome)
          calculationAmount = taxableSallary;
        else calculationAmount = currentSlabIncome;
            Tax += (calculationAmount * slabs[i + 1].taxPercentage) / 100;
        if (i === slabs.length - 1 && taxableSallary > 0) {
            Tax +=
            (taxableSallary * slabs[slabs.length - 1].taxPercentage) / 100;
        }
        return Tax;
    }
  
    if (totalTax < minimumAmount) return minimumAmount;
    return totalTax;
  }
  
  
  // function calculateTaxAmount(income) {
  //   const maxPercentage = 30;
  //   const minimumAmount = 50;
  //   const slabs = [
  //     { income: 3000, taxPercentage: 0 },
  //     { income: 6000, taxPercentage: 5 },
  //     { income: 10000, taxPercentage: 15 },
  //     { income: 20000, taxPercentage: 25 },
  //   ];
  //   if (income <= slabs[0].income) return 0;
  
  //   let totalTax = 0;
  //   let taxableSalary = income - slabs[0].income;
  
  //   if (taxableSalary > 0) {
  //     for (let i = 0; i < slabs.length - 1; i++) {
  //       if (taxableSalary <= 0) {
  //         break;
  //       }
  //       totalTax += getTaxCalculated(slabs, taxableSalary, i);
  //       taxableSalary -= slabs[i + 1].income - slabs[i].income;
  //     }
  //   }
  
  //   function getTaxCalculated(slabs, taxableSalary, i) {
  //     let currentSlabIncome = slabs[i + 1].income - slabs[i].income;
  //     let calculationAmount = Math.min(taxableSalary, currentSlabIncome);
  //     let tax = (calculationAmount * slabs[i + 1].taxPercentage) / 100;
  //     return tax;
  //   }
  
  //   if (totalTax < minimumAmount) return minimumAmount;
  //   if (totalTax > maxPercentage * income) return maxPercentage * income;
  //   return totalTax;
  // }
  
  