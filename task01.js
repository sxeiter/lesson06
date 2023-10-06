'use strict'

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (failedStudents, allStudents) => {
    const successStudents = [...allStudents];
    for (const key in successStudents){
        for (const num in failedStudents) {
            if(successStudents[key] === failedStudents[num]){
                successStudents.splice(key , 1);
            }
        }
    }
    return successStudents;
}

console.log(filter(failedStudents,allStudents));