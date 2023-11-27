//Borrar sin conflictos de hora registros anteriores a una fecha concreta:
DELETE FROM audit_log
WHERE 
    timestamp 'epoch' + created_time * interval '1 millisecond' < '2023-11-27 08:09:15'::timestamp AT TIME ZONE 'Europe/Madrid';
    

//Programable con crontab para que se ejecute cada noche a las 00:00

    DELETE FROM audit_log WHERE timestamp 'epoch' + created_time * interval '1 millisecond' < CURRENT_TIMESTAMP AT TIME ZONE 'Europe/Madrid'; 

//audit_log_1700697600000; guarda los registros de los últimos 7 días. 