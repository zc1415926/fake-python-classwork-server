module.exports = () => {
    const data = {
        pythonFile: []
    }

    for(let i=0; i<10; i++){
        data.pythonFile.push({id: i, fileName: `hello${i}.py`, filePath: `/pythonFiles/hello${i}.py`})
    }

    return data
}
