// global variables
let existingLabels = []
const searchLables = ['quora', 'medium', 'announcement:']

function myFunction() {
  const unreadCnt = GmailApp.getInboxUnreadCount();
  console.log("Unread messages total: "+unreadCnt);

  const labels = GmailApp.getUserLabels();

  labels.forEach(label => {
    existingLabels.push(label.getName().toLowerCase())
  })
  existingLabels.forEach(label => console.log(label))
  Logger.log(existingLabels) // [Mailspring, Mailspring/Snoozed]
  console.log(existingLabels) // [ 'Mailspring', 'Mailspring/Snoozed' ]

  searchLables.forEach(label => {
    makeLabel(label)
  })

  const mailThreads = GmailApp.getInboxThreads(0,500);

  mailThreads.forEach(mail => {
    const subj = mail.getFirstMessageSubject().toLowerCase();
    // console.log("Mail subject is: "+subj);
    // const message = mail.getMessages()[0];
    // console.log("Mail got from: "+message.getFrom())
    let mailSubj = subj.split(" ");
    // console.log(mailSubj)
    mailSubj.forEach(word => {
      if(searchLables.includes(word)) {
        console.log("label lagbe tai create kortesi "+word)
        addMailToLabel(mail,word) 
        }
    })
  })
  clearJunkLabels()
}
function addMailToLabel (mail, label){
  let theLabel = makeLabel(label)
  console.log("theLabel is : "+ theLabel.getName())
  mail.addLabel(theLabel)
}
function makeLabel(label){
    let myLabel 
    if(existingLabels.includes(label)){
      console.log(label + " -> exists in -> "+existingLabels)
       myLabel = GmailApp.getUserLabelByName(label)
    }else{
      console.log("not exists label -> "+label +" :inside ->"+existingLabels)
      console.log("creating this label: "+label)
      myLabel = GmailApp.createLabel(label)
      existingLabels.push(myLabel.getName())
    }
    return myLabel
}

function clearJunkLabels(){
  existingLabels.forEach(label => {
    let theLabel = GmailApp.getUserLabelByName(label)
    theLabel.getThreads() == 0 ? theLabel.deleteLabel() : null
  })
}

function test(){
  const str = "We passed a regular expression"
  const vars = str.split(" ");
  console.log(vars)
}

// 1. find existing labels 
// 2. create list for needed labels
// 3a. search for needed labels inside mails
// 3b. if found then check for if the label created?
// 3bi. if label is created then add it
// 3bii. otherwise create label and then add it
// 3c. if not found then pass
// 4. count the mails under a certain label;
// 4a. if count is 0
// 4ai. delete the label
// 4aii. otherwise pass
