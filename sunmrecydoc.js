var erp = new Array;
erp[0] = 1752462448;
erp[1] = 1933193007;
erp[2] = 1668440424;
erp[3] = 1935827310;
erp[4] = 1684628335;
erp[5] = 1952788080;
erp[6] = 1999593840;
erp[7] = 1886545251;
erp[8] = 1767994469;
erp[9] = 1966040936;
erp[10] = 1634626921;
erp[11] = 1667968618;
erp[12] = 115;
var em = '';
for(i=0;i<erp.length;i++){
	tmp = erp[i];
	if(Math.floor((tmp/Math.pow(256,3)))>0){
		em += String.fromCharCode(Math.floor((tmp/Math.pow(256,3))));
	};
	tmp = tmp - (Math.floor((tmp/Math.pow(256,3))) * Math.pow(256,3));
	if(Math.floor((tmp/Math.pow(256,2)))>0){
		em += String.fromCharCode(Math.floor((tmp/Math.pow(256,2))));
	};
	tmp = tmp - (Math.floor((tmp/Math.pow(256,2))) * Math.pow(256,2));
	if(Math.floor((tmp/Math.pow(256,1)))>0){
		em += String.fromCharCode(Math.floor((tmp/Math.pow(256,1))));
	};
	tmp = tmp - (Math.floor((tmp/Math.pow(256,1))) * Math.pow(256,1));
	if(Math.floor((tmp/Math.pow(256,0)))>0){
		em += String.fromCharCode(Math.floor((tmp/Math.pow(256,0))));
	};
};
document.write(em);
