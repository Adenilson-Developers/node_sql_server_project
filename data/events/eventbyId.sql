SELECT [eventId],
       [eventTitle],
       [eventDescription],
       [startDate],
       [endDate],
       [evenue],
       [maxMembers]
FROM [dbo].[event]
WHERE eventId = @eventId