let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    // Change this to use the plus equal technique you've learned
    count += 1
    countEl.textContent = count
}

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph    
    newCount=count+' - '
    saveEl.textContent += newCount
    console.log(count)
    countEl.textContent = 0
    count = 0 
}


