<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Incidents</title>
</head>
<body>
<ul>
		<li>(${incident.id}) </li>
		<li>(${incident.titre}) </li>
		<li>(${incident.description}) </li>
		<li>(${incident.gravite}) </li>
		<li>(${incident.type}) </li>
		<li>(${incident.progression}) </li>
		<li>(${incident.email}) </li>
	</ul>

</body>
</html>