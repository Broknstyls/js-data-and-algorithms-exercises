let new1;
Student ={
    subject:'free',
    grade: 55
}

 let add = document.getElementById('add').onclick = function(){
    let sub = document.getElementById('subject').value;
    let grad = document.getElementById('grade').value;
    grad = Number(grad);
    sub = String(sub)
    Student.subject = sub;
    Student.grade = grad;
    console.log(Student)
    
}
document.getElementById('display').onclick = function(){
    document.querySelector('h1').textContent = `THIS STUDENT GOT A ${Student.grade} IN ${Student.subject}`
}



