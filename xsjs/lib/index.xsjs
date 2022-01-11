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