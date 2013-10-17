function uploadError(sender,args)
{
	alert("Error al subir el Documento." + args);			
}    

function UploadComplete(sender,args)
{	
	var nombreArchivo = args.get_fileName();
	var extensiones = new Array(".jpg", ".jpeg", ".JPG", ".JEPG",".doc", ".docx", ".xls", ".xlsx");
	var extensionArchivo = (nombreArchivo.substring(nombreArchivo.lastIndexOf("."))).toLowerCase();
	var extensionValida = false;

	for ( i = 0; i < extensiones.length; i++ )
	{
		if ( extensionArchivo == extensiones[i] )
		{
			extensionValida = true;
			break;
		}
	}
	
	if ( extensionValida == false )	
		alert("El archivo que intenta subir no esta permitido. \n Solo se pueden subir archivos word, excel,imagenes y archivos de texto.");
	else{
		var fullName = document.getElementById("MainContent_txtGuid").value + args.get_fileName();
		//document.getElementById("tabArchivoSubido").style.display="block";
		//document.getElementById("imgDenunciante").style.display="block";		
		document.getElementById("MainContent_hidden_value").value=fullName;
		$("#archivoSubido").html("Archivo Subido con exito");
		//document.getElementById("ctl00_ContentPlaceHolder1_afuUploader_ctl02").disabled = true;
	}	
}
	
function confirma()
{
	var mensaje = "Esta a punto de borrar el archivo que acaba de subir. Desea Continuar?";
	if( confirm( mensaje ) == true )
		return true;
	
	return false;
}