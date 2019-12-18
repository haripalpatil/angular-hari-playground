import { Component } from '@angular/core';
import { Party } from './Party';
import { Alias } from './Alias';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  partyList1: Party[];
  partyList2: Party[];
  aliasList: Alias[];
  ngOnInit(){
    //console.log('Hello World .......');
    this.partyList1 = [];
    this.partyList2 = [];
    this.aliasList = [];
    this.populatePartyAndAlias();
  }
  populatePartyAndAlias(){
    let party1 : Party = new Party();
    party1.partyStatus = 'A';
    party1.partyType = 'DB';
    party1.partyId = 1;
    
    let alias1 : Alias  = new Alias();
    alias1.aliasId = 1;
    alias1.firstName = 'abc';
    alias1.lastName = 'pqr';


    let alias11 : Alias  = new Alias();
    alias11.firstName = 'xyz';
    alias11.lastName = 'quw';
    alias11.aliasId = 11;

    this.aliasList.push(alias1);
    this.aliasList.push(alias11);
    //party1.aliases = this.aliasList;
    
    
    
    let party2 : Party  = new Party();
    party2.partyStatus = 'IA';
    party2.partyType = 'DB';
    party2.partyId = 2
    let alias2 : Alias  = new Alias();
    alias2.firstName = 'F2';
    alias2.lastName = 'L2';
    alias2.aliasId = 1;
    let alias22 : Alias  = new Alias();
    alias22.firstName = 'F22';
    alias22.lastName = 'L22';
    alias22.aliasId = 11;
    let aliasList2 : Alias[] = [];
    aliasList2.push(alias2);
    aliasList2.push(alias22);
    party2.aliases = aliasList2;
    
    let party3 : Party  = new Party();
    party3.partyStatus = 'IA';
    party3.partyType = 'DB';
    party3.partyId = 2
    let alias3 : Alias  = new Alias();
    alias3.firstName = 'F2';
    alias3.lastName = 'L2';
    alias3.aliasId = 1;
    let aliasadd : Party  = new Alias();
    aliasadd.firstName = 'F2';
    aliasadd.lastName = 'L2';
    //aliasadd.aliasId = 1;
    let alias33 : Alias  = new Alias();
    alias33.firstName = 'F22';
    alias33.lastName = 'L22';
    alias33.aliasId = 11;
    let aliasList3 : Alias[] = [];
    aliasList3.push(alias3);
    aliasList3.push(alias33);
    aliasList3.push(aliasadd)
    party3.aliases = aliasList3;
    
    let party4 : Party  = new Party();
    party4.partyStatus = 'IA';
    party4.partyType = 'DB';
    //party4.partyId = 
    let alias4 : Alias  = new Alias();
    alias4.firstName = 'F2';
    alias4.lastName = 'L2';
    alias4.aliasId = 1;
    let alias44 : Alias  = new Alias();
    alias44.firstName = 'F22';
    alias44.lastName = 'L22';
    alias44.aliasId = 11;
    let aliasList4 : Alias[] = [];
    aliasList4.push(alias4);
    aliasList4.push(alias44);
    party4.aliases = aliasList4;
    
    this.partyList1.push(party1);
    this.partyList1.push(party2);
    this.partyList2.push(party1);
    //this.partyList2.push(party3);
    this.partyList2.push(party4);

      
    for(let party of  this.partyList1) {
     // console.log('status is ' + party.partyStatus);
      for(let ali of party.aliases){
       // console.log('firstName...' + ali.firstName);
      }
    }
    console.log('The compare method output.......' + this.isSameModified(this.partyList1, this.partyList2));
    //console.log('The compare method output.......' + this.objCompare(this.partyList1, this.partyList2));
  }

 
  isSameModified(originalParties: Party[], modifiedParties: Party[]) {
    for (let modifiedParty of modifiedParties) {
      if((modifiedParty.partyId === undefined || modifiedParty.partyId === '') 
      && (modifiedParty.partyType !== undefined && modifiedParty.partyType === 'DB')) {
        console.log('new party added')
        return true;
      }
      console.log('modified party id ..' + modifiedParty.partyId)
      if (modifiedParty.partyType !== undefined && modifiedParty.partyType === 'DB') {
        for (let originalParty of originalParties) {
           console.log('originalParty party id ..' + originalParty.partyId)
          if (originalParty.partyType !== undefined && originalParty.partyType === 'DB') {
            if (modifiedParty.partyId !== undefined && originalParty.partyId != undefined &&
            modifiedParty.partyId === originalParty.partyId) {
              console.log('******** party are same');
              if (modifiedParty.partyStatus !== undefined && originalParty.partyStatus !== undefined && modifiedParty.partyStatus !== originalParty.partyStatus) {
                console.log('******** status Changed');
                return true;
              } else {
                let originalAliases: Alias[] = [] ; // originalParty.aliases;
                let modifiedAliases: Alias[] = [] ;// = modifiedParty.aliases;
                console.log('******** Start alias check' + modifiedAliases);
                if(modifiedAliases !== undefined && originalAliases !== undefined){
                  for (let modifiedAlias of modifiedAliases) {
                    if(modifiedAlias.aliasId === undefined || modifiedAlias.aliasId === ''){
                      console.log('******** new Alias' + modifiedAlias.firstName);
                      return true;
                    }           
                    for (let orginalAlias of originalAliases) {
                      console.log('checking orginalAlias..' + orginalAlias.aliasId + 'modified alias' + modifiedAlias.aliasId);
                      if (modifiedAlias.aliasId === orginalAlias.aliasId) {
                        console.log('******** aliase are same ...' + orginalAlias.firstName
                        + '.........' + modifiedAlias.firstName);
                        if (orginalAlias.firstName !== modifiedAlias.firstName
                          || orginalAlias.lastName !== orginalAlias.lastName) {
                            console.log('******** aliase names are different');
                          return true;
                        }
                          break; 
                        }
                      }
                    }
                }
                }
                
              }
            }
            }
        }
      }
    
    console.log('******** end of isDebtorModified');
    return false;
  }

  populatePartyAndAlias1(){
    let party1 : Party = new Party();
    party1.partyStatus = 'A';
    party1.partyType = 'DB';
    party1.partyId = 1;
    
    let alias1 : Party  = new Alias();
    alias1.aliasId = 1;
    alias1.firstName = 'abc';
    alias1.lastName = 'pqr';


    let alias11 : Party  = new Alias();
    alias11.firstName = 'xyz';
    alias11.lastName = 'quw';
    alias11.aliasId = 11;

    this.aliasList.push(alias1);
    this.aliasList.push(alias11);
    party1.aliases = this.aliasList;
    
    
    
    let party2 : Party  = new Party();
    party2.partyStatus = 'IA';
    party2.partyType = 'DB';
    party2.partyId = 2
    let alias2 : Party  = new Alias();
    alias2.firstName = 'F2';
    alias2.lastName = 'L2';
    alias2.aliasId = 1;
    let alias22 : Party  = new Alias();
    alias22.firstName = 'F22';
    alias22.lastName = 'L22';
    alias22.aliasId = 11;
    let aliasList2 : Alias[] = [];
    aliasList2.push(alias2);
    aliasList2.push(alias22);
    party2.aliases = aliasList2;
    
    
    
    
    this.partyList1.push(party1);
    this.partyList1.push(party2);
    this.partyList2.push(party1);
    this.partyList2.push(party2);

      
    for(let party of  this.partyList1) {
     // console.log('status is ' + party.partyStatus);
      for(let ali of party.aliases){
       // console.log('firstName...' + ali.firstName);
      }
    }
    console.log('The compare method output.......' + this.isSameModified(this.partyList1, this.partyList2));
    //console.log('The compare method output.......' + this.objCompare(this.partyList1, this.partyList2));
  }

}
