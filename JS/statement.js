// document.getElementById('btn-deposit').addEventListener('click', function () {
//     const depositField = document.getElementById('deposit-amount')
//     const deposit = depositField.value
//     console.log(deposit);
//     depositField.value = '';
// })

document.getElementById('btn-deposit').addEventListener('click', function () {

    const cashDeposit = document.getElementById('cash-deposit')
    const newDepositString = cashDeposit.value
    const newDeposit = parseFloat(newDepositString)
    const deposit = document.getElementById('total-deposit')
    const previousDepositString = deposit.innerText
    const previousDeposit = parseFloat(previousDepositString)
    const totalDeposit = previousDeposit + newDeposit;
    deposit.innerText = totalDeposit
    // console.log(totalDeposit)
    cashDeposit.value = ''

    const balance = document.getElementById('total-balance')
    const balanceString = balance.innerText
    const currentBalance = parseFloat(balanceString)

    const newBalance = currentBalance + newDeposit
    balance.innerText = newBalance.toFixed(1)
    // console.log(newBalance)
})

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const cashWithdraw = document.getElementById('cash-withdraw')
    const newWithdrawString = cashWithdraw.value
    const newWithdraw = parseFloat(newWithdrawString)
    const withdraw = document.getElementById('total-withdraw')
    const previousWithdrawString = withdraw.innerText
    const previousWithdraw = parseFloat(previousWithdrawString)
    const totalWithdraw = previousWithdraw + newWithdraw;
    withdraw.innerText = totalWithdraw
    // console.log(totalDeposit)
    cashWithdraw.value = ''

    const balance = document.getElementById('total-balance')
    const balanceString = balance.innerText
    const currentBalance = parseFloat(balanceString)

    const newBalance = currentBalance - newWithdraw
    balance.innerText = newBalance.toFixed(1)
    // console.log(newBalance)
})





