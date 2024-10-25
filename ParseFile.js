const ReadFile = require ('./ReadFile')
const {EOL} = require ('os')
const QA = require ('./QA')

class ParseFile {

    static async parse (path, code) {
        const getText = await ReadFile.getFile(path, code)

        const getArrayQA = getText.split(EOL).filter((el) => el!=(''))
        console.log(getArrayQA)

        const arrayQA = [];
        let question = '';

        for (let i = 0; i < getArrayQA.length; i++) {
            const line = getArrayQA[i];

            if (question === '') {
                    question = line;
                } else {
                    const answer = line;
                    arrayQA.push(new QA(question, answer));
                    question = '';
                }
            
        }


        console.log (arrayQA)
    }    

}

ParseFile.parse("./topics/raccoon_flashcard_data.txt", 'utf8')

