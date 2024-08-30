const DOB = document.getElementById("DOB")
const result = document.getElementById("result")
const todayDay = new Date()


DOB.addEventListener("input" ,function(){
    const DOBDate = new Date(DOB.value)
    const deferenceDate = todayDay.getDate() - DOBDate.getDate()
    const deferenceMonth = todayDay.getMonth() - DOBDate.getMonth()
    const deferenceYear = todayDay.getFullYear() - DOBDate.getFullYear()
    result.innerText = `${deferenceYear} ${deferenceYear>1 ? 'Years' : 'Year'} ${deferenceMonth} ${deferenceMonth>1 ? 'Months' : 'Month'} & ${deferenceDate} ${deferenceDate>1 ? 'Days' : 'Days'}`
})