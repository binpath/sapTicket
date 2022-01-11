//$.import("sap.hana.xs.libs.dbutils", "xsds");
//var XSDS = $.sap.hana.xs.libs.dbutils.xsds;

var XSDS = $.require('@sap/cds');

/*
* FIRST TRY
*/
/*
var entBase = XSDS.importEntities([
  { $entity: "SAPTICKET_BASE" }
], function(error, entities) {
  var eBase = entities["SAPTICKET_BASE"];
  console.log(eBase);
});
*/

/*
* SECOND TRY
*/
var entBase2 = XSDS.$getEntity("SAPTICKET_BASE", function(error, instance) {
  console.log("Second try >>> "+error);
  console.log(instance);
});
console.log(entBase2);

/*
* Third TRY
*/
var entBase3 = XSDS.$getEntity("sapTicket.Base", function(error, instance) {
  console.log("third try >>> "+error);
  console.log(instance);
});
console.log(entBase3);

/*
* Fourth TRY
*/
var entBase4 = XSDS.$getEntity("sapTicket_Base", function(error, instance) {
  console.log("Fourth try >>> "+error);
  console.log(instance);
});
console.log(entBase4);

var conn = $.hdb.getConnection();

var query = `SELECT count(*) as CANTIDAD 
					FROM "SAPTICKET_BASE"`;
var rs = conn.executeQuery(query);
var cantidad = rs[0].CANTIDAD;

var greeting =
	`XS Layer SAPTICKET_BASE cantidad: ${cantidad}
    </br>Welcome to HANA `;

$.response.contentType = "text/html; charset=utf-8";
$.response.setBody(greeting);   