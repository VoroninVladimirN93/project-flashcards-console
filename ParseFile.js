const ReadFile = require ('./ReadFile')
const {EOL} = require ('os')
const QA = require ('./QA')

class ParseFile {

    static async parse (path, code) {
        const getText = await ReadFile.getFile(path, code)

        const getArrayQA = getText.split(EOL).filter((el) => el!=(''))
        console.log(getArrayQA)

        const arrayQA = getArrayQA.map (el => {
            const [question, answer] = el.split(EOL)
            return new QA(question, answer)})    

        console.log (arrayQA)
    }    

}

ParseFile.parse("./topics/raccoon_flashcard_data.txt", 'utf8')

