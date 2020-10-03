console.log('Welcome to JS world');
var name="Rajeev";
console.log('name is ::' ,name);
console.log('Type of Name',typeof(name));
var password;
console.log('password:',password);
console.log('Type of password',typeof(password));
var resultstatus=name===password?true:false;
console.log(resultstatus);
var contact={
    id:101,
    name:'Rajeev',
    email:'hi@gmail.com',
    no:08105295982
}
console.log('Display values::');
console.log(contact);
console.log(contact.name);
console.log(contact.no);

function sum(firstNum,secondNum){

}
var addResult=sum(5,4);
console.log(addResult)

var sum1=(firstNum,secondNum)=>{

    return firstNum+secondNum;
}
console.log(sum1(5,7))

function varAndletChecker(){
        var thirdNumber=500;
        if(true){
            thirdNumber=501;
            console.log('inside if ::',thirdNumber)
        }
        console.log(thirdNumber)
}
varAndletChecker();
class Contact{
    constructor(id,name,email,contactNo){
        this.id=id;
        this.name=name;
        this.email=email;
        this.contactNo=contactNo;
    }
    getContactInfo(){
        return "contact num is ::"+this.contactNo+"email id ::"+ this.email;
    }
}
console.log("**********Log class Details*************");
let contactObj=new Contact(101,'Rajeev','rr@lassionwheels.com',8105295982);
console.log(contactObj);
console.log(contactObj.email);

var studentArray=[
    {id:201,name:'aa',email:'aa@gmail.com',marks:11,branch:'CSE'},
    {id:202,name:'bb',email:'bb@gmail.com',marks:22,branch:'ECO'},
    {id:203,name:'cc',email:'cc@gmail.com',marks:33,branch:'SCI'},
    {id:204,name:'dd',email:'dd@gmail.com',marks:44,branch:'PHE'},
    {id:205,name:'ee',email:'ee@gmail.com',marks:55,branch:'CSE'},
    {id:206,name:'ff',email:'ff@gmail.com',marks:66,branch:'ECO'},
    {id:207,name:'gg',email:'gg@gmail.com',marks:77,branch:'CSE'},
    {id:208,name:'hh',email:'hh@gmail.com',marks:88,branch:'CSE'},
    {id:209,name:'ii',email:'ii@gmail.com',marks:99,branch:'PSY'},
    {id:210,name:'jj',email:'jj@gmail.com',marks:100,branch:'PSY'}
];
console.log(studentArray);
console.log(studentArray.length);
studentArray.push({id:101,name:'kk',email:'kk@gmail.com',marks:51,branch:'LIT'});
studentArray.push({id:501,name:'rajeev',email:'rajeev@gmail.com',marks:47,branch:'GEO'});
console.log("**After push operation**");
console.log(studentArray);
studentArray.pop()
console.log(studentArray.length)

let filterlist=studentArray.filter(r=>r.marks>=99)
console.log('99 +',filterlist);
var filterList=studentArray.filter(a=>a.branch=='LIT');
console.log('LIT:',filterList);
let ind= studentArray.findIndex(a=> a.id==101);
console.log('index:',ind);
//splice to remove an element at an index position    
studentArray.splice(ind,1);
console.log('After Splice')
console.log(studentArray);

//Splice to remove an element and replace with another
studentArray.splice(ind,1,{id:101,name:'kk',email:'kk@gmail.com',marks:91,branch:'LIT'});


