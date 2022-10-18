const threeMusketeers = ["Athos", "Porthos", "Aramis"]
for (let i = 0; i < threeMusketeers.length; i++) {
  console.log(threeMusketeers[i])
}
threeMusketeers.push("D'Artagnan")
console.log(threeMusketeers)

threeMusketeers.forEach(musketeer => {
  console.log(musketeer)
})

threeMusketeers.splice(2, 1)
for (const musketeer of threeMusketeers) {
  console.log(musketeer)
}
