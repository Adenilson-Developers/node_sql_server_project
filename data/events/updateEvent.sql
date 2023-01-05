UPDATE [dbo].[event]
SET [eventTitle]=@eventTitle,
    [eventDescription]=@eventDescription,
    [startDate]=@startDate,
    [endDate]=@endDate,
    [evenue]=@evenue,
    [maxMembers]=@maxMembers
WHERE [eventId]=@eventId

SELECT [eventId],
       [eventTitle],
       [eventDescription],
       [startDate],
       [endDate],
       [evenue],
       [maxMembers]
FROM [dbo].[event]
WHERE [eventId]=@eventId