try{	
	document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
	document.getElementById('fileinput2').addEventListener('change', readSingleFile_mut, false);
}
catch(err) {
    //pass
    }

function calcTmSimple(seq){
		method = document.getElementById('combotmcalc').value; //document.getElementById('combo_mut').value;
		if (typeof seq===undefined){alert('There is a problem with your primer length. Try to use smaller Tms or Sizes')}
		if (method == "Breslauer")
		{

			var patterns   = ["AA","TT","AT","TA","CA","TG","GT","AC","CT","AG","GA","TC","CG","GC","GG","CC"]; //patterns to look for Tm calculation
			var vh_cal     = [9.1 ,9.1 ,8.6 ,6.0 ,5.8 ,5.8 ,6.5 ,6.5 ,7.8 ,7.8 ,5.6 ,5.6 ,11.9,11.1,11.0,11.0]; //values of enthalpy for each patter, in the same order
			var vh         = 0;
			var vs_cal     = [24.0,24.0,23.9,16.9,12.9,12.9,17.3,17.3,20.8,20.8,13.5,13.5,27.8,26.7,26.6,26.6]; //values of entropy for each patter, in the same order
			var vs         = 0;

			var pairs      = seq.match(/.{1,2}/g)+','+seq.substr(1).match(/.{1,2}/g); //create an array with 2 bases each element

			for (i=0; i<patterns.length; i++) {
				vh+=count(pairs.split(","), patterns[i])*vh_cal[i];
				vs+=count(pairs.split(","), patterns[i])*vs_cal[i];
				}

			var primerconc = 500 //document.getElementById('pConc_mut').value
			var cation     = 0.050 //document.getElementById('salt_mut').value
			var v0         = -10.8
			var r          = 1.987
			var LnPrimer   = Math.log(primerconc/(4.0e9)) //primerconc = concentracao do DNA em nM
			var salt       = 16.6*Math.log(cation)/Math.LN10
			var tm         = (1000.0*(-vh)/(v0 - vs + r*(Math.log(primerconc/(4.0e9))))) + salt - 273.15

			return Math.round(tm)
		}
		if (method == "Sugimoto")
		{
			var patterns   = ["AA","TT","AT","TA","CA","TG","GT","AC","CT","AG","GA","TC","CG","GC","GG","CC"]; //patterns to look for Tm calculation
			var vh_cal     = [8.0 ,8.0 ,5.6 ,6.6 ,8.2 ,8.2 ,9.4 ,9.4 ,6.6 ,6.6 ,8.8 ,8.8 ,11.8,10.5,10.9,10.9]; //values of enthalpy for each patter, in the same order
			var vh         = 0;
			var vs_cal     = [21.9,21.9,15.2,18.4,21.0,21.0,25.5,25.5,16.4,16.4,23.5,23.5,29.0,26.4,28.4,28.4]; //values of entropy for each patter, in the same order
			var vs         = 0;

			var pairs      = seq.match(/.{1,2}/g)+','+seq.substr(1).match(/.{1,2}/g); //create an array with 2 bases each element

			for (i=0; i<patterns.length; i++) {
				vh+=count(pairs.split(","), patterns[i])*vh_cal[i];
				vs+=count(pairs.split(","), patterns[i])*vs_cal[i];
				}

			var primerconc = 500 //document.getElementById('pConc_mut').value
			var cation     = 0.050 //document.getElementById('salt_mut').value
			var v0         = -9.0
			var r          = 1.987
			var LnPrimer   = Math.log(primerconc/(4.0e9)) //primerconc = concentracao do DNA em nM
			var salt       = 16.6*Math.log(cation)/Math.LN10
			var tm         = (1000.0*(-vh)/(v0 - vs + r*(Math.log(primerconc/(4.0e9))))) + salt - 273.15

			return Math.round(tm)
		}
}
function calcTm(seq){
		if (typeof seq===undefined){alert('There is a problem with your primer length. Try to use smaller Tms or Sizes')}

		method = document.getElementById('combo').value;
		if (method == "Breslauer")
		{
			var patterns   = ["AA","TT","AT","TA","CA","TG","GT","AC","CT","AG","GA","TC","CG","GC","GG","CC"]; //patterns to look for Tm calculation
			var vh_cal     = [9.1 ,9.1 ,8.6 ,6.0 ,5.8 ,5.8 ,6.5 ,6.5 ,7.8 ,7.8 ,5.6 ,5.6 ,11.9,11.1,11.0,11.0]; //values of enthalpy for each patter, in the same order
			var vh         = 0;
			var vs_cal     = [24.0,24.0,23.9,16.9,12.9,12.9,17.3,17.3,20.8,20.8,13.5,13.5,27.8,26.7,26.6,26.6]; //values of entropy for each patter, in the same order
			var vs         = 0;

			var pairs      = seq.match(/.{1,2}/g)+','+seq.substr(1).match(/.{1,2}/g); //create an array with 2 bases each element

			for (i=0; i<patterns.length; i++) {
				vh+=count(pairs.split(","), patterns[i])*vh_cal[i];
				vs+=count(pairs.split(","), patterns[i])*vs_cal[i];
				}

			var primerconc = document.getElementById('pConc').value
			var cation     = document.getElementById('salt').value
			var v0         = -10.8
			var r          = 1.987
			var LnPrimer   = Math.log(primerconc/(4.0e9)) //primerconc = concentracao do DNA em nM
			var salt       = 16.6*Math.log(cation)/Math.LN10
			var tm         = (1000.0*(-vh)/(v0 - vs + r*(Math.log(primerconc/(4.0e9))))) + salt - 273.15

			return tm.toFixed(2);
		}
		if (method == "Sugimoto")
		{
			var patterns   = ["AA","TT","AT","TA","CA","TG","GT","AC","CT","AG","GA","TC","CG","GC","GG","CC"]; //patterns to look for Tm calculation
			var vh_cal     = [8.0 ,8.0 ,5.6 ,6.6 ,8.2 ,8.2 ,9.4 ,9.4 ,6.6 ,6.6 ,8.8 ,8.8 ,11.8,10.5,10.9,10.9]; //values of enthalpy for each patter, in the same order
			var vh         = 0;
			var vs_cal     = [21.9,21.9,15.2,18.4,21.0,21.0,25.5,25.5,16.4,16.4,23.5,23.5,29.0,26.4,28.4,28.4]; //values of entropy for each patter, in the same order
			var vs         = 0;

			var pairs      = seq.match(/.{1,2}/g)+','+seq.substr(1).match(/.{1,2}/g); //create an array with 2 bases each element

			for (i=0; i<patterns.length; i++) {
				vh+=count(pairs.split(","), patterns[i])*vh_cal[i];
				vs+=count(pairs.split(","), patterns[i])*vs_cal[i];
				}

			var primerconc = document.getElementById('pConc').value
			var cation     = document.getElementById('salt').value
			var v0         = -9.0
			var r          = 1.987
			var LnPrimer   = Math.log(primerconc/(4.0e9)) //primerconc = concentracao do DNA em nM
			var salt       = 16.6*Math.log(cation)/Math.LN10
			var tm         = (1000.0*(-vh)/(v0 - vs + r*(Math.log(primerconc/(4.0e9))))) + salt - 273.15

			return tm.toFixed(2);

		}
}
function calcTmMut(seq){
		if (typeof seq==='undefined'){ seq = 'AAAAAAAA'}

		method = document.getElementById('combo_mut').value;
		if (method == "Breslauer")
		{
			var patterns   = ["AA","TT","AT","TA","CA","TG","GT","AC","CT","AG","GA","TC","CG","GC","GG","CC"]; //patterns to look for Tm calculation
			var vh_cal     = [9.1 ,9.1 ,8.6 ,6.0 ,5.8 ,5.8 ,6.5 ,6.5 ,7.8 ,7.8 ,5.6 ,5.6 ,11.9,11.1,11.0,11.0]; //values of enthalpy for each patter, in the same order
			var vh         = 0;
			var vs_cal     = [24.0,24.0,23.9,16.9,12.9,12.9,17.3,17.3,20.8,20.8,13.5,13.5,27.8,26.7,26.6,26.6]; //values of entropy for each patter, in the same order
			var vs         = 0;

			var pairs      = seq.match(/.{1,2}/g)+','+seq.substr(1).match(/.{1,2}/g); //create an array with 2 bases each element

			for (i=0; i<patterns.length; i++) {
				vh+=count(pairs.split(","), patterns[i])*vh_cal[i];
				vs+=count(pairs.split(","), patterns[i])*vs_cal[i];
				}

			var primerconc = document.getElementById('pConc_mut').value
			var cation     = document.getElementById('salt_mut').value
			var v0         = -10.8
			var r          = 1.987
			var LnPrimer   = Math.log(primerconc/(4.0e9)) //primerconc = concentracao do DNA em nM
			var salt       = 16.6*Math.log(cation)/Math.LN10
			var tm         = (1000.0*(-vh)/(v0 - vs + r*(Math.log(primerconc/(4.0e9))))) + salt - 273.15


		}
		if (method == "Sugimoto")
		{
			var patterns   = ["AA","TT","AT","TA","CA","TG","GT","AC","CT","AG","GA","TC","CG","GC","GG","CC"]; //patterns to look for Tm calculation
			var vh_cal     = [8.0 ,8.0 ,5.6 ,6.6 ,8.2 ,8.2 ,9.4 ,9.4 ,6.6 ,6.6 ,8.8 ,8.8 ,11.8,10.5,10.9,10.9]; //values of enthalpy for each patter, in the same order
			var vh         = 0;
			var vs_cal     = [21.9,21.9,15.2,18.4,21.0,21.0,25.5,25.5,16.4,16.4,23.5,23.5,29.0,26.4,28.4,28.4]; //values of entropy for each patter, in the same order
			var vs         = 0;

			var pairs      = seq.match(/.{1,2}/g)+','+seq.substr(1).match(/.{1,2}/g); //create an array with 2 bases each element

			for (i=0; i<patterns.length; i++) {
				vh+=count(pairs.split(","), patterns[i])*vh_cal[i];
				vs+=count(pairs.split(","), patterns[i])*vs_cal[i];
				}

			var primerconc = document.getElementById('pConc_mut').value
			var cation     = document.getElementById('salt_mut').value
			var v0         = -9.0
			var r          = 1.987
			var LnPrimer   = Math.log(primerconc/(4.0e9)) //primerconc = concentracao do DNA em nM
			var salt       = 16.6*Math.log(cation)/Math.LN10
			var tm         = (1000.0*(-vh)/(v0 - vs + r*(Math.log(primerconc/(4.0e9))))) + salt - 273.15


		}
		return tm.toFixed(2);
}
function tmcalc(){ //tmCalc for simple calculator
	fw = document.getElementById('seqCalcFw').value.toUpperCase()
	rv = document.getElementById('seqCalcRv').value.toUpperCase()

	if (fw.length>1){
		if (fw.length<10){
			document.getElementById('tmCalcFw').value='';
			$("#tmCalcFw").parent().removeClass("is-dirty");
			document.getElementById('sizeCalcFw').value='';
			$("#sizeCalcFw").parent().removeClass("is-dirty");
			document.getElementById('gcCalcFw').value='';
			$("#gcCalcFw").parent().removeClass("is-dirty");
		}
		else{
			document.getElementById('tmCalcFw').value=calcTmSimple(fw);
			$("#tmCalcFw").parent().addClass("is-dirty");
			document.getElementById('sizeCalcFw').value=fw.length;
			$("#sizeCalcFw").parent().addClass("is-dirty");
			document.getElementById('gcCalcFw').value=gcPercentage(fw);
			$("#gcCalcFw").parent().addClass("is-dirty");
		}
	}
	if (rv.length>1){
		if (rv.length<10){
			document.getElementById('tmCalcRv').value='';
			$("#tmCalcRv").parent().removeClass("is-dirty");
			document.getElementById('sizeCalcRv').value='';
			$("#sizeCalcRv").parent().removeClass("is-dirty");
			document.getElementById('gcCalcRv').value='';
			$("#gcCalcRv").parent().removeClass("is-dirty");
		}
		else{
			document.getElementById('tmCalcRv').value=calcTmSimple(rv)
			$("#tmCalcRv").parent().addClass("is-dirty");
			document.getElementById('sizeCalcRv').value=rv.length
			$("#sizeCalcRv").parent().addClass("is-dirty");
			document.getElementById('gcCalcRv').value=gcPercentage(rv);
			$("#gcCalcRv").parent().addClass("is-dirty");
		}
	}
}
function count(a,i){   //count(object,'AT')
 var result = 0;
 for(var o in a)
  if(a[o] == i)
   result++;
 return result;
}
function gcPercentage(dna){
	var gc = count(dna, 'C')+count(dna,'G')
	return Math.round(gc/dna.length*100)+'%'
}
function cleartmcalc(){
	document.getElementById('seqCalcFw').value = "";
	$("#seqCalcFw").parent().removeClass("is-dirty");
	document.getElementById('seqCalcRv').value = "";
	$("#seqCalcRv").parent().removeClass("is-dirty");
	document.getElementById('tmCalcFw').value = "";
	$("#tmCalcFw").parent().removeClass("is-dirty");
	document.getElementById('tmCalcRv').value = "";
	$("#tmCalcRv").parent().removeClass("is-dirty");
	document.getElementById('sizeCalcFw').value = "";
	$("#sizeCalcFw").parent().removeClass("is-dirty");
	document.getElementById('sizeCalcRv').value = "";
	$("#sizeCalcRv").parent().removeClass("is-dirty");
	document.getElementById('gcCalcFw').value = "";
	$("#gcCalcFw").parent().removeClass("is-dirty");
	document.getElementById('gcCalcRv').value = "";
	$("#gcCalcRv").parent().removeClass("is-dirty");
}
function eraseText(){
	document.getElementById('SeqFASTA').value = "";
	$("#SeqFASTA").parent().removeClass("is-dirty");
	document.getElementById('Tm').value = "";
	$("#Tm").parent().removeClass("is-dirty");
	document.getElementById('resultForward').value = "";
	$("#resultForward").parent().removeClass("is-dirty");
	document.getElementById('resultReverse').value = "";
	$("#resultReverse").parent().removeClass("is-dirty");
	document.getElementById('appendFw').value = "";
	$("#appendFw").parent().removeClass("is-dirty");
	document.getElementById('appendRv').value = "";
	$("#appendRv").parent().removeClass("is-dirty");
}
function eraseText_mut(){
	document.getElementById('Size_temp_mut').value = "";
	$("#Size_temp_mut").parent().removeClass("is-dirty");
	document.getElementById('SeqFASTA_mut').value = "";
	$("#SeqFASTA_mut").parent().removeClass("is-dirty");
	document.getElementById('resultForward_mut').value = "";
	$("#resultForward_mut").parent().removeClass("is-dirty");
	document.getElementById('resultReverse_mut').value = "";
	$("#resultReverse_mut").parent().removeClass("is-dirty");
}
function eraseText_helper(){
	document.getElementById('SeqFASTA').value = "";
	$("#SeqFASTA").parent().removeClass("is-dirty");
	document.getElementById('resultForward').value = "";
	$("#resultForward").parent().removeClass("is-dirty");
	document.getElementById('resultReverse').value = "";
}
function load_example(){

	document.getElementById('SeqFASTA').value = '>Seq1[Org1] \
	\nTTCTAAGAAGGGGAGGAGGATTATTCTCTGATCGAGCTGGGGAGGAGGAACCCTATCGACATTCTGAGGGGAGGAGGAACCCTCTTTATTCTCTGATCGAGCTCTTTAATCGACATTCTGAGGGGAGGAGGAACCCTCTTTATTCTCTGA \
	\n>Seq2[Org2] \
	\nACATCGACATTATCGACTGAGGAACCCTCTTTATTCTCTGATCGAGCTCTGAGGGGAGGAGGAACCCTCTTTATTCTCTGATCGAGCTATTCTGAGGGGAGGAGGAACCCTCTTTATTCTCTGATCGAGCTTATTAACGCCATAATAGAGAGG';
	$("#SeqFASTA").parent().addClass("is-dirty");
	document.getElementById('Tm').value = "55";
	$("#Tm").parent().addClass("is-dirty");
	document.getElementById('appendFw').value = "CAGGGCGCCATG";
	$("#appendFw").parent().addClass("is-dirty");
	document.getElementById('appendRv').value = "GACCCGACGCGGTTA";
	$("#appendRv").parent().addClass("is-dirty");
	document.getElementById('pConc').value = "500";
	document.getElementById('salt').value = "0.050";
	document.getElementById('SeqFASTA_mut').value = ">Seq1[Org1] Point-Mutation\
	\nTTCTGAGGGGAGGATCGATCGTACATCAGGAATTATTCTCTGATCGAGCTGGGGAGGAGGAACCCTATC(CG.TA)GACATTCTGAGGGGAGGAGGAACCCTCTTTATTCTCTGATCGAGCTCTTTAATCGACATTCTGAGGGGAGGAGGAACCCTCT\
	\nTTATTCTCTGA\
	\n>Seq2[Org2] Deletion\
	\nACATCGACCGGCCGACAGTTGAGCTCGTAGCTAGCATTCTGAGGAACCCTCTTTATTCTCTGATCGA(CCC.)GCTCTGAGGGGAGGAGGAACCCTCTTTATTCTCTGATCGAGCTATTCTGAGGGGAGGAGGAACCCTCTTTATTCTCTGATCGAGC\
	\nTTATTAAAAAAACCCGGGAT\
	\n>Seq3[Org3] Insertion\
	\nATCGTACTGACGTTGACTGATCTGAGCTAGCTGAGTCTGATCGATCTGAGCTATGCTGAGCTATGCTGACTGATC(.ACCCT)ATGCTAGCTGATCTGACTGTGACTGATCTGATCTGATCGTGACTGATCAGCTAGCTAGTCGATCTGAGCGTATTC\
	\nGTATGGTCATGCACTGATACTGATGTACTTACTAGCTAGCTAGCT";
	$("#SeqFASTA_mut").parent().addClass("is-dirty");
	document.getElementById('Size_temp_mut').value = "35";
	$("#Size_temp_mut").parent().addClass("is-dirty");
	document.getElementById('pConc_mut').value = "500";
	document.getElementById('salt_mut').value = "0.050";
}
function load_example_helper(){
	document.getElementById('SeqFASTA').value = '>Seq1[Org1]\
	\nATGTTCGAAGAAGGGGAGGAGGATTATTCTCTGATCGAGCTGGGGAGGAGGAACCCTATCGACATTCTGAGGGGAGGAGGAACCCGGTTTATTCTCTGTTCGAGCTCTTTAATCGACATTCTGAGGGGAGGAGGAACCCTCTTTATTCTCTGA  \
	\n#R28T';
	$("#SeqFASTA").parent().addClass("is-dirty");
}
function complementary(dna){
	var comp_string = ''
	for (i=0;i<dna.length;i++) {
		if (dna[i]=='A') {
				comp_string+='T'
		}
		if (dna[i]=='T') {
				comp_string+='A'
		}
		if (dna[i]=='C') {
				comp_string+='G'
		}
		if (dna[i]=='G') {
				comp_string+='C'
		}
	}
	return comp_string
}
function findPrimerAmplification(seqs_list, tm){
	var fw_seqs          = []
	var rv_seqs          = []
	var fw_tms           = []
	var rv_tms           = []
	var tmelt            = tm
	for (l=0;l<seqs_list.length;l++){
		var seq          = seqs_list[l]
		var fw           = []
		var fw_tm        = []
		var rv           = []
		var rv_tm        = []
		var bases_fw     = ''
		var bases_rv     = ''
		var ini          = seq.substr(0,45)
		var fin          = complementary(reverse(seq.substr(-45)))

		for (j=0;j<ini.length;j++){
			var nuc_fw = ini[j];
			var nuc_rv = fin[j];
			bases_fw += nuc_fw;
			bases_rv += nuc_rv;
			fw.push(bases_fw)
			rv.push(bases_rv)

			if (bases_fw.length>10 && tm>60){
				fw_tm.push(calcTm(bases_fw))
				rv_tm.push(calcTm(bases_rv))
			}
			else if (bases_fw.length>10 && tm<=60) {
				if (bases_fw.length<35){
					fw_tm.push(calcTm(bases_fw))
					rv_tm.push(calcTm(bases_rv))

				}
				else{
					fw_tm.push(0)
					rv_tm.push(0)
				}
			}
			else {
				fw_tm.push(0)
				rv_tm.push(0)
			}
		}
		fw_seqs.push(fw)
		fw_tms.push(fw_tm)
		rv_seqs.push(rv)
	    rv_tms.push(rv_tm)

	}

	var fw_cg = [[],[]];
	var rv_cg = [[],[]];
	var primer_fw = [];
	var primer_rv = [];
	var tm_fw = [];
	var tm_rv = [];

	for (m=0;m<fw_tms.length;m++){
		var tms  	= fw_tms[m];
		var seqs   	= fw_seqs[m];
		var t       = [];
		var s       = [];
		var aux     = [];

		for (k=0;k<tms.length;k++){
			var tmp = tms[k];
			if (Math.abs(tmp-tmelt)<=5 && (seqs[tms.indexOf(tmp)].substr(-1)=='C' || seqs[tms.indexOf(tmp)].substr(-1)=='G')){
				s.push(seqs[tms.indexOf(tmp)]);
				t.push(tmp);
			}
		}
		fw_cg[0].push(s)
		fw_cg[1].push(t)
		for (j=0;j<t.length;j++){
			tm_best = t[j]
			aux.push(Math.abs(tmelt-tm_best))
		}
		primer_fw.push(s[aux.indexOf(Math.min.apply(null, aux))])
		tm_fw.push(t[aux.indexOf(Math.min.apply(null, aux))])
	}

	for (i=0;i<rv_tms.length;i++){
		var tms  	= rv_tms[i]
		var seqs 	= rv_seqs[i]
		var t    	= []
        var s    	= []
        var aux  	= []
		for (j=0;j<tms.length;j++){
			var tmp = tms[j]
			if (Math.abs(tmp-tmelt)<=5 && (seqs[tms.indexOf(tmp)].charAt(0)=='C' || seqs[tms.indexOf(tmp)].charAt(0)=='G')){
				s.push(seqs[tms.indexOf(tmp)])
				t.push(tmp)
			}
			else if (Math.abs(tmp-tmelt)<=5){
				s.push(seqs[tms.indexOf(tmp)])
				t.push(tmp)
			}
		}
		rv_cg.push(s)
		rv_cg.push(t)
		for (k=0;k<t.length;k++){
			tm_best = t[k]
			aux.push(Math.abs(tmelt-tm_best))
		}
		primer_rv.push(s[aux.indexOf(Math.min.apply(null, aux))])
		tm_rv.push(t[aux.indexOf(Math.min.apply(null, aux))])
	}

	//document.getElementById('saida').innerHTML=primer_fw+'   '+tm_fw+'\n'+primer_rv+'   '+tm_rv
	return [[primer_fw,tm_fw],[primer_rv,tm_rv]]
}
function splitEntry(){
	var seq_entry  = document.getElementById('SeqFASTA').value.split(/\n/)
	var ids        = []
	var seqs       = []
	var indexes    = []
	var aux 	   = ''
	var x		   = 0
	for (i=0;i<seq_entry.length;i++) {		//Select Ids from FASTA Sequence, limiting to 25 chars
		if (seq_entry[i].search('>')){
		}
		else{
			ids.push(seq_entry[i].slice(0,20));
			indexes.push(x);
		}
		x++
	}
	for (i=0;i<ids.length;i++){				//Retrieve DNA seqs by creating subslists with IDs
		seqs[i] = seq_entry.slice(indexes[i]+1,indexes[i+1]).join('').toUpperCase().replace(/\W/g, '');
	}
	return [ids, seqs]
}
function splitEntryHelper(){
	var seq_entry  = document.getElementById('SeqFASTA').value.split(/\n/)
	var ids        = []
	var muts			 = []
	var seqs       = []
	var indexes    = []
	var aux 	   = ''
	var x		   = 0
	for (i=0;i<seq_entry.length;i++) {		//Select Ids from FASTA Sequence, limiting to 25 chars
		if (seq_entry[i].search('>')){
		}
		else{
			ids.push(seq_entry[i].slice(0,20));
			indexes.push(x);
		}
		x++
	}
	for (i=0;i<ids.length;i++){				//Retrieve DNA seqs by creating subslists with IDs
            if (seq_entry.slice(indexes[i]+1,indexes[i+1]).join('').toUpperCase().split('\#')[1]){
      		seqs[i] = seq_entry.slice(indexes[i]+1,indexes[i+1]).join('').toUpperCase().split('\#')[0].replace(/\W/g, '');
      		muts[i] = seq_entry.slice(indexes[i]+1,indexes[i+1]).join('').toUpperCase().split('\#')[1];
            }
            else{
                  seqs[i] = seq_entry.slice(indexes[i]+1,indexes[i+1]).join('').toUpperCase().split('\#')[0].replace(/\W/g, '');
      		muts[i] = 'X'
            }
	}
	return [ids, seqs, muts]
}
function splitEntryMut(){
	var seq_entry  = document.getElementById('SeqFASTA_mut').value.split(/\n/)
	var ids        = []
	var seqs       = []
	var indexes    = []
	var aux 	   = ''
	var x		   = 0
	for (i=0;i<seq_entry.length;i++) {		//Select Ids from FASTA Sequence, limiting to 25 chars
		if (seq_entry[i].search('>')){
		}
		else{
			ids.push(seq_entry[i].slice(0,20));
			indexes.push(x);
		}
		x++
	}
	for (i=0;i<ids.length;i++){				//Retrieve DNA seqs by creating subslists with IDs
		seqs[i] = seq_entry.slice(indexes[i]+1,indexes[i+1]).join('').toUpperCase().replace(/\t/g,'').replace(/' '/g,'');
	}
	return [ids, seqs]
}
function reverse(s){
    return s.split("").reverse().join("");
}
function readSingleFile_mut(evt) {
	//Retrieve the first (and only!) File from the FileList object
	var f = evt.target.files[0];

	if (f) {
	  var r = new FileReader();
	  r.onload = function(e) {
		  var contents = e.target.result;

		document.getElementById("SeqFASTA_mut").value = contents.substr(0);
		$("#SeqFASTA_mut").parent().addClass("is-dirty");

	  }
	  r.readAsText(f);
	} else {
	  alert("Failed to load file");
	}
}
function readSingleFile(evt) {
	//Retrieve the first (and only!) File from the FileList object
	var f = evt.target.files[0];

	if (f) {
	  var r = new FileReader();
	  r.onload = function(e) {
		  var contents = e.target.result;

		document.getElementById("SeqFASTA").value = contents.substr(0);
		$("#SeqFASTA").parent().addClass("is-dirty");
	  }
	  r.readAsText(f);
	} else {
	  alert("Failed to load file");
	}
}
function aligner(id, primer){
	if (typeof primer ==='undefined'){primer = 'There is a problem with your primer size. '}
	var id_len			= id.length
	var primer_len  	= primer.length
	var aligned_string 	= ''
	var dif 			= parseInt((55-primer_len)/8)
	var tabs_list 		= ['\t','\t\t','\t\t\t','\t\t\t\t','\t\t\t\t\t','\t\t\t\t\t\t','\t\t\t\t\t\t\t']
	var dif_id 			= parseInt((16-id_len)/8)


	id+= tabs_list[dif_id]

	primer+=tabs_list[dif]
	aligned_string=id+primer
	return aligned_string
}
function saveTextAsFile_fw(){
	var textToWrite = document.getElementById("resultForward").value.replace('IDs','Ids').replace('Primer Forward','Primer_Forward');
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = 'fw_primers.csv'


	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
}
function saveTextAsFile_rv(){
	var textToWrite = document.getElementById("resultReverse").value.replace('IDs','Ids').replace('Primer Forward','Primer_Forward');
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = 'rv_primers.csv'


	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}
function saveTextAsFile_fw_mut(){
	var textToWrite = document.getElementById("resultForward_mut").value.replace('IDs','ids\t\t').replace('Forward Primer','Forward_Primer');
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = 'fw_primers_mut.txt'


	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}
	downloadLink.click();
}
function saveTextAsFile_rv_mut(){
	var textToWrite = document.getElementById("resultReverse_mut").value.replace('IDs','ids\t\t').replace('Reverse Primer','Reverse_Primer');
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = 'rv_primers_mut.txt'


	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}
function destroyClickedElement(event){
	document.body.removeChild(event.target);
}
function findPrimerTemp(primer_list,tm){
	var counter    	= 1
	var primers_cg 	= []
	var tm_cg      	= []
	var temp 		= 0

	for (i=0;i<primer_list.length;i++){
		var primer 		 = primer_list[i]
		var plist		 = []
		var tlist		 = []
		var auxlist		 = []

		if (primer.indexOf('*')!=-1){//deletion
			auxlist 	= ['del']
			var iter  	= primer.length
			for (j=0;j<iter;j++){
				primer = primer.slice(0,-1)
				auxlist.push(primer)
				if (j>iter-10){
					break;
				}
			}
			primers_cg.push(auxlist);
		}
		else if (primer.indexOf('_')!=-1){
			auxlist 	= ['ins']
			var mut		= primer.split('_')[0]
			var primer	= primer.split('_')[1]
			var auxlist_tm = []
			var iter2 	= 0
			var iter  	= primer.length
			for (l=0;l<iter;l++){
				primer = primer.slice(0,-1)
				auxlist.push(mut+'_'+primer)
				if (l>iter-10-mut.length){
					break;
				}
			}
			primers_cg.push(auxlist)
		}
		else {
			auxlist 	= ['poi']
			var iter  	= primer.length/2
			for (n=0;n<iter;n++){
				primer = primer.slice(0,-1)
				auxlist.push(primer)
				primer = primer.slice(1)
				auxlist.push(primer)
				
			}
			primers_cg.push(auxlist)
		}
	}
	var solution = []
	for (o=0;o<primers_cg.length;o++){
		var primerlist = primers_cg[o]
		if (primerlist[0]=='poi'){
			solution.push(solvePoint(primerlist.slice(1)))
		}
		else if (primerlist[0]=='del'){
			solution.push(solveDeletion(primerlist.slice(1)))
		}
		else if (primerlist[0]=='ins'){
			solution.push(solveInsertion(primerlist.slice(1)))
		}
	}
	return solution;
}
function solveDeletion(primerlist){
	var tm = document.getElementById('Size_temp_mut').value

	for (k=0;k<primerlist.length;k++){
		var primer = primerlist[k];

		if (Math.round(calcTmMut(primer))<=tm){
			break;
		}
	}

	var chop  = 0
	while ((primer.slice(-1)=='A' || primer.slice(-1) == 'T') || chop ==3){
		primer = primer.slice(0,-1);
		chop++		;
	}
	return primer;
}
function solveInsertion(primerlist){
	var mut 	= primerlist[1].split('_')[0]
	var tm 		= document.getElementById('Size_temp_mut').value
	for (m=0;m<primerlist.length;m++){
		var primer = primerlist[m]
		primer = primer.split('_')[1]
		if (Math.round(calcTmMut(primer))<=tm){
			break;
		}
	}
	var iter2 = 0
	while ((primer.slice(-1)=='A' || primer.slice(-1) == 'T') || iter2 ==3){
		primer 	= primer.slice(0,-1)
		iter2++
	}
	return mut+'_'+primer;
}
function solvePoint(primerlist){
	var tm = document.getElementById('Size_temp_mut').value
    var protolist_tm = []
	var protolist = []
	for (k=0;k<primerlist.length;k++){
		var primer = primerlist[k];

		if (Math.abs((calcTmMut(primer))-(parseInt(tm)))<=3){
			//protolist.push(primer)
			//protolist_tm.push(Math.abs((calcTmMut(primer))-(parseInt(tm))))			
			//protolist_tm.indexOf(Math.min.apply(null, protolist_tm))
			//document.getElementById('resultForward').value+=protolist[protolist_tm.indexOf(Math.min.apply(null, protolist_tm))]+'\n'
			break;
			
		}
	}
	return findCG(primer);
}
function indexer(arr, val){
	var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(parseInt(i));
    }
    return indexes;
}
function findCG(primer){
	var slices = []
	var tm = parseInt(document.getElementById('Size_temp_mut').value)

	if ((primer.charAt(0)=='G' || primer.charAt(0)=='C') && (primer.slice(-1)=='C' || primer.slice(-1)=='G')){
		//document.getElementById('resultForward_mut').value+=primer+'\n'
		
		return primer
	}
	else{
		var gc_index = []
		gc_index.push((indexer(primer,'G').concat(indexer(primer,'C'))).sort(function(a, b){return a-b}))
		var gc_list = []
		for (k=0;k<gc_index.length;k++){
			var partial = []
			var fin 	= [gc_index[k].pop()+1,gc_index[k].pop()+1,gc_index[k].pop()+1]
			var ini 	= [gc_index[k].shift(),gc_index[k].shift(),gc_index[k].shift()]

			for (l=0;l<3;l++){
				for (m=0;m<3;m++){
					partial.push(primer.slice(ini[l],fin[m]))
				}
			}
		}
	}
	aux = []
	for (c=0;c<partial.length;c++){
		var value = calcTmMut(partial[c])
		aux.push(Math.abs(tm-value))
	}

	return partial[aux.indexOf(Math.min.apply(null, aux))];
}
function findPrimerSize(primer_list,size_str){
	var primers = []
	var plist   = []
	var tms     = []
	var size 	= parseInt(size_str)

	for (i=0;i<primer_list.length;i++){

		primer = primer_list[i]

		if (primer.indexOf('*')!=-1){
			primers.push(primer.slice(0,size))
		}
		else if (primer.indexOf('_')!=-1){
			mut = primer.slice(0,primer.indexOf('_'))
			primers.push(mut+'_'+primer.slice(primer.indexOf('_')+1,primer.indexOf('_')+1+size))
		}
		else {

			var leng = primer.length
			do {
				primer = primer.slice(1,-1)
				leng = primer.length
			} while (leng>parseInt(size)+1);
			primers.push(primer)
		}
	}
	for (k=0;k<primers.length;k++){
		if (primers[k].indexOf('_')!=-1){
			tms.push(calcTmMut(primers[k].slice(primers[k].indexOf('_'))))
			primers[k] = primers[k].replace('_','')
		}
		else{
			tms.push(calcTmMut(primers[k]))
		}
	}
	return [primers,tms]
}
function mutateFunction(sequence_list){
	var	pos1 	= []
	var pos2 	= []
	var posdot	= []
	for (i=0;i<sequence_list.length;i++){
		var seq = sequence_list[i]
		for (k=0;k<seq.length;k++){
			var mut = seq[k]
			if (mut == '('){
				pos1.push(k)
			}
			if (mut == ')'){
				pos2.push(k)
			}
			if (mut == '.'){
				posdot.push(k)
			}
		}
	}
	var seqs_mut = []
	var seqs_int = []

	for (j=0;j<sequence_list.length;j++){
		var seq	= sequence_list[j]
		var po1	= pos1[j]
		var po2	= pos2[j]
		if (seq.indexOf('.)')!=-1) {
			seqs_mut.push(seq.slice(po2+1)+'*')
			seqs_int.push(seq.slice(0,po1)+seq.slice(po2+1))
		}
		else if (seq.indexOf('(.')!=-1){
			var mutation = seq.slice(po1+1,po2).split('.')[1]
			seqs_mut.push(mutation+'_'+seq.slice(po2+1))
			seqs_int.push(seq.slice(0,po1)+mutation+seq.slice(po2+1))
		}
		else {
			var mutation = seq.slice(po1+1,po2).split('.')[1]
			seqs_mut.push(seq.slice(0,po1)+mutation+seq.slice(po2+1))
			seqs_int.push(seq.slice(0,po1)+mutation+seq.slice(po2+1))
		}
	}
	return [seqs_mut, pos2, seqs_int]
}
function mutateReverse(seqs_mutated,primers_entry, tm_list){
	var reverse_entry 	= []
	var numseq 			= 1

	for (i=0;i<primers_entry.length;i++){
		var seq 	= seqs_mutated[i]
		var prime 	= primers_entry[i]

		reverse_entry.push(reverse(seq.slice(0,seq.search(prime))))

		numseq++
	}
	var primers = []

	for (j=0;j<tm_list.length;j++){
		var seq 	= complementary(reverse_entry[j])
		var temp 	= parseInt(tm_list[j])
		var counter = 0
		var primer 	= ''
		var tm 		= calcTmMut(primer)
		var aux 	= []
		var aux_tm 	= []
		for (l=0;l<seq.length;l++){
			primer 	+= seq[l]

			if (Math.abs(calcTmMut(primer)-temp)<=8){
				aux.push(primer)
			}
		}
		for (m=0;m<aux.length;m++){
			aux_tm.push(Math.abs(parseFloat(calcTmMut(aux[m])-temp)))
		}
		primers.push(aux[aux_tm.indexOf(Math.min.apply(null, aux_tm))])
	}


	var tms = []
	for (k=0;k<primers.length;k++){
		tms.push(calcTmMut(primers[k]))
	}
	document.getElementById('resultForward_mut').value+=primers+'\n'+tms+'\n'

	return [primers,tms]
}
function mutatePrimer(){
    var errors = ''
    if (document.getElementById('Size_temp_mut').value==0){
        errors+= 'Optimal Tm or Primer Size '
    }
    if (document.getElementById('pConc_mut').value==0){
        errors+= 'Primer Concentration '
    }
    if (document.getElementById('salt_mut').value==0){
        errors+= 'Monovalent Cation Concentration '
    }
    if (document.getElementById('Size_temp_mut').value==0 || document.getElementById('pConc_mut').value==0 || document.getElementById('salt_mut').value==0 ){
        alert('None of your parameters can be equal to zero. Please check '+errors)
        return false
    }


	var mut_type = document.getElementById('mut_type').value
	if (mut_type=='size'){
		mutateSize()
	}
	else{
		mutateTemp()
	}
}
function mutateSize(){
	var size 		= document.getElementById('Size_temp_mut').value
	var entry 		= document.getElementById('SeqFASTA_mut').value
	var id_seq 		= splitEntryMut(entry)
	var ids 		= id_seq[0]
	var seqs 		= id_seq[1]
	var working_seq = []
	var mut_pos_int = mutateFunction(seqs)
	var seqs_mut    = mut_pos_int[0]
	var position 	= mut_pos_int[1]
	var seqs_int 	= mut_pos_int[2]

	//criar alerta aqui pra sequencia perto da borda

	for (i=0;i<position.length;i++){
		var seq = seqs_mut[i]
		var pos = position[i]
		if (seq.indexOf('*')!=-1){
			working_seq.push(seq.slice(0,60)+'*')
		}
		else if (seq.indexOf('_')!=-1){
			working_seq.push(seq.slice(0,80))
		}
		else {
			working_seq.push(seq.slice(pos-40,pos+30))
		}
	}

	var primer_tm_fw 	= findPrimerSize(working_seq,size)
	var primersFw  		= primer_tm_fw[0]
	var tmsFw    		= primer_tm_fw[1]
	var primer_tm_rv	= mutateReverse(seqs_int,primersFw,tmsFw)
	var primersRv 		= primer_tm_rv[0]
	var tmsRv 			= primer_tm_rv[1]

	document.getElementById('resultForward_mut').value=''
	document.getElementById('resultReverse_mut').value=''

	document.getElementById('resultForward_mut').value+='IDs'+'\t\t\t'+'Forward Primer'+'\t\t\t\t\t\t'+'Tms'+'  '+'Size'+'\n'
	document.getElementById('resultReverse_mut').value+='IDs'+'\t\t\t'+'Reverse Primer'+'\t\t\t\t\t\t'+'Tms'+'  '+'Size'+'\n'
	for (i=0;i<primersFw.length;i++){
			if (typeof primersRv[i]==='undefined'){primersRv[i]='Error - Primer size. Try lower Tm or Size'}
			document.getElementById('resultForward_mut').value+=aligner(ids[i],primersFw[i])+Math.round(tmsFw[i])+'   '+primersFw[i].length+'\n'
			document.getElementById('resultReverse_mut').value+=aligner(ids[i],primersRv[i])+Math.round(tmsRv[i])+'   '+primersRv[i].length+'\n'
		}
		$("#resultForward_mut").parent().addClass("is-dirty");
		$("#resultReverse_mut").parent().addClass("is-dirty");
}
function mutateTemp(){
	var temperature = document.getElementById('Size_temp_mut').value
	var entry 		= document.getElementById('SeqFASTA_mut').value
	var ids_seq_t	= splitEntryMut(entry)
	var ids 		= ids_seq_t[0]
	var seqs		= ids_seq_t[1]
	var working_seq = []
	var seq_pos_int = mutateFunction(seqs)
	var seqs_mut    = seq_pos_int[0]
	var	position	= seq_pos_int[1]
	var	seqs_int	= seq_pos_int[2]

	for (i=0;i<position.length;i++){
		var seq = seqs_mut[i]
		var pos = position[i]
		if (seq.indexOf('*')!=-1){
			working_seq.push(seq.slice(0,60)+'*')
		}
		else if (seq.indexOf('_')!=-1){
			working_seq.push(seq.slice(0,80))
		}
		else {
			working_seq.push(seq.slice(pos-40,pos+30))
		}
	}

	var primer_tm_fw_t 	= findPrimerTemp(working_seq,temperature)
	var primersFw 		= primer_tm_fw_t
	var tmsFw			= []
	for (s=0;s<primersFw.length;s++){
		if (primersFw[s].indexOf('_')!=-1){
			tmsFw.push(Math.round(calcTmMut(primersFw[s].split('_')[1])))
		}
		else{
			tmsFw.push(Math.round(calcTmMut(primersFw[s])))
		}
	}

	var primer_tm_rv_t  = mutateReverse(seqs_int, primersFw, tmsFw)
	var primersRv		= primer_tm_rv_t[0]
	var tmsRv			= primer_tm_rv_t[1]

	document.getElementById('resultForward_mut').value=''
	document.getElementById('resultReverse_mut').value=''

	document.getElementById('resultForward_mut').value+='IDs'+'\t\t\t'+'Forward Primer'+'\t\t\t\t\t\t'+'Tms'+'  '+'Size'+'\n'
	document.getElementById('resultReverse_mut').value+='IDs'+'\t\t\t'+'Reverse Primer'+'\t\t\t\t\t\t'+'Tms'+'  '+'Size'+'\n'

	for (i=0;i<primersFw.length;i++){
		if (primersFw[i].indexOf('_')!=-1){
			var primer = primersFw[i].split('_')[0]+primersFw[i].split('_')[1]
			document.getElementById('resultForward_mut').value+=aligner(ids[i],primer)+Math.round(tmsFw[i])+'   '+primersFw[i].length+'\n'
			document.getElementById('resultReverse_mut').value+=aligner(ids[i],primersRv[i])+Math.round(tmsRv[i])+'   '+primersRv[i].length+'\n'
		}
		else {
			document.getElementById('resultForward_mut').value+=aligner(ids[i],primersFw[i])+Math.round(tmsFw[i])+'   '+primersFw[i].length+'\n'
			document.getElementById('resultReverse_mut').value+=aligner(ids[i],primersRv[i])+Math.round(tmsRv[i])+'   '+primersRv[i].length+'\n'
		}
	}
	$("#resultForward_mut").parent().addClass("is-dirty");
	$("#resultReverse_mut").parent().addClass("is-dirty");
}
function amplification(){
    var errors = ''
    if (document.getElementById('Tm').value==0){
        errors+= 'Optimal Tm '
    }
    if (document.getElementById('pConc').value==0){
        errors+= 'Primer Concentration '
    }
    if (document.getElementById('salt').value==0){
        errors+= 'Monovalent Cation Concentration '
    }
    if (document.getElementById('Tm').value==0 || document.getElementById('pConc').value==0 || document.getElementById('salt').value==0 ){
        alert('None of your parameters can be equal to zero. Please check '+errors)
        return false
    }
	var tm          = document.getElementById('Tm').value
	var split 		= splitEntry()
	var ids  	    = split[0]
	var seqs 	    = split[1]
	var findPrimer  = findPrimerAmplification(seqs, tm)
	var primersFw   = findPrimer[0][0]
	var primersRv   = findPrimer[1][0]
	var tmsFw       = findPrimer[0][1]
	var tmsRv	    = findPrimer[1][1]
	var tagFw       = document.getElementById('appendFw').value
	var tagRv       = document.getElementById('appendRv').value

	document.getElementById('resultForward').value=''
	document.getElementById('resultReverse').value=''

	document.getElementById('resultForward').value+='IDs'+'\t\t\t'+'Forward Primer'+'\t\t\t\t\t\t'+'Tms'+'  '+'Size'+'\n'
	document.getElementById('resultReverse').value+='IDs'+'\t\t\t'+'Reverse Primer'+'\t\t\t\t\t\t'+'Tms'+'  '+'Size'+'\n'
	for (i=0;i<primersFw.length;i++){
		document.getElementById('resultForward').value+=aligner(ids[i],tagFw+primersFw[i])+Math.round(tmsFw[i])+'   '+primersFw[i].length+'\n'
		document.getElementById('resultReverse').value+=aligner(ids[i],tagRv+primersRv[i])+Math.round(tmsRv[i])+'   '+primersRv[i].length+'\n'
	}
	$("#resultForward").parent().addClass("is-dirty");
	$("#resultReverse").parent().addClass("is-dirty");
}
function codonDiff(codon, target){
      var counter = 0
      if (codon.charAt(0) != target.charAt(0)){
            counter++
      }
      if (codon.charAt(1) != target.charAt(1)){
            counter++
      }
      if (codon.charAt(2) != target.charAt(2)){
            counter++
      }
      return counter
}
function helper(){
      document.getElementById('resultForward').value=''

	codonThreeL = [	'ATA', 'ATC', 'ATT', 'ATG', 'ACA', 'ACC', 'ACG', 'ACT',
				'AAC', 'AAT', 'AAA', 'AAG', 'AGC', 'AGT', 'AGA', 'AGG',
				'CTA', 'CTC', 'CTG', 'CTT', 'CCA', 'CCC', 'CCG', 'CCT',
				'CAC', 'CAT', 'CAA', 'CAG', 'CGA', 'CGC', 'CGG', 'CGT',
				'GTA', 'GTC', 'GTG', 'GTT', 'GCA', 'GCC', 'GCG', 'GCT',
				'GAC', 'GAT', 'GAA', 'GAG', 'GGA', 'GGC', 'GGG', 'GGT',
				'TCA', 'TCC', 'TCG', 'TCT', 'TTC', 'TTT', 'TTA', 'TTG',
				'TAC', 'TAT', 'TAA', 'TAG', 'TGC', 'TGT', 'TGA', 'TGG'	]

	codonOneL 	= [     'I', 'I', 'I', 'M', 'T', 'T', 'T', 'T',
      	              'N', 'N', 'K', 'K', 'S', 'S', 'R', 'R',
      	              'L', 'L', 'L', 'L', 'P', 'P', 'P', 'P',
      	              'H', 'H', 'Q', 'Q', 'R', 'R', 'R', 'R',
      	              'V', 'V', 'V', 'V', 'A', 'A', 'A', 'A',
      	              'D', 'D', 'E', 'E', 'G', 'G', 'G', 'G',
      	              'S', 'S', 'S', 'S', 'F', 'F', 'L', 'L',
      	              'Y', 'Y', '_', '_', 'C', 'C', '_', 'W'	]

	var dataEntry 		= splitEntryHelper()
	var cds       		= dataEntry[1]
	var muts      		= dataEntry[2]
	var headers    		= dataEntry[0]
	var proteinlist 	      = []
	var dnacodons	      = []
	var proteinseq          = ''
      var output			= ''

      for (s=0;s<muts.length;s++){
            var test = muts[s]
            if (test=='X'){
                  document.getElementById('resultForward').value+='Your sequence '+headers[s]+" doesn't have a mutation specified"
                  $("#resultForward").parent().addClass("is-dirty");
                  return false
            }
      }


	for (i=0;i<cds.length;i++){
		dnacodons 	= cds[i].match(/.{1,3}/g)
		proteinseq	= ''
		for (j=0;j<dnacodons.length;j++){
			proteinseq+=codonOneL[codonThreeL.indexOf(dnacodons[j])]
		}
		proteinlist.push(proteinseq)
	}

	for (k=0;k<proteinlist.length;k++){
            var mut     = muts[k]
            var pseq    = proteinlist[k]
            var dnaseq  = cds[k]
            var header  = headers[k]
            if (isNaN(mut.charAt(0))){
                  if (isNaN(mut.slice(-1))){
                        var position = parseInt(mut.slice(1,-1))-1

                        if (pseq[position]==mut.charAt(0)){
                              var codon         = dnaseq.slice(position*3,(position*3)+3)
                              var codonlist     = []
                              var codonscore    = []
                              for (l=0;l<codonOneL.length;l++){
                                    if (mut.slice(-1)==codonOneL[l]){
                                          codonlist.push(codonThreeL[l])

                                          codonscore.push(codonDiff(codon, codonThreeL[l]))

                                    }
                              }

                              var best_mut = codonlist[codonscore.indexOf(Math.min.apply(null, codonscore))]

                              document.getElementById('resultForward').value+=header+'\n'
                              document.getElementById('resultForward').value+=dnaseq.slice(0,position*3)+'('+codon+'.'+best_mut+')'+dnaseq.slice((position*3)+3)+'\n'



                        }
                        else {
                              var codon = dnaseq.slice(position*3,(position*3)+3)
                              document.getElementById('resultForward').value+=header+'\n'
                              document.getElementById('resultForward').value+='Expected '+mut.charAt(0)+', found '+codonOneL[codonThreeL.indexOf(codon)]+'. Please check your mutation again.'+'\n'

                        }
                  }
                  else{
                        var position = parseInt(mut.slice(1))
                        if (pseq[position]==mut.charAt(0)){
                              document.getElementById('resultForward').value+=header+'\n'
                              document.getElementById('resultForward').value+=dnaseq.slice(0,position*3)+'('+dnaseq.slice(position*3,(position*3)+3)+'.'+')'+dnaseq.slice((position*3)+3)+'\n'
                        }
                        else {
                              var codon         = dnaseq.slice(position*3,(position*3)+3)
                              document.getElementById('resultForward').value+=header+'\n'
                              document.getElementById('resultForward').value+='Expected '+mut.charAt(0)+', found '+codonOneL[codonThreeL.indexOf(codon)]+'. Please check your mutation again.'+'\n'
                        }
                  }
            }
            else{
                  var insertion = codonThreeL[codonOneL.indexOf(mut.slice(-1))]
                  var position = parseInt(mut.slice(0,-1))
                  document.getElementById('resultForward').value+=header+'\n'
                  document.getElementById('resultForward').value+=dnaseq.slice(0,position*3)+'('+'.'+insertion+')'+dnaseq.slice((position*3)+3)+'\n'
            }


	}


	$("#resultForward").parent().addClass("is-dirty");
}
