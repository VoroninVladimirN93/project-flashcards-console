const ReadFile = require ('./ReadFile')
const {EOL} = require ('os')

class ParseFile {

    static async parse (path, code) {
        const getText = await ReadFile.getFile(path, code)
        const getArrayQA = getText.split(EOL).filter((el) => el!=(''))
        const arrayQA = getArrayQA.map (el => {
            const [question, answer] =  el.split(',')
            return new QA()})
    }    

}

ParseFile.parse("./topics/raccoon_flashcard_data.txt", 'utf8')

