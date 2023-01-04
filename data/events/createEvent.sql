INSERT INTO [dbo].[event]
        (
            [eventTitle],
            [eventDescription],
            [startDate],
            [endDate],
            [evenue],
            [maxMembers]
        )
VALUES(
      @eventTitle,
      @eventDescription,
      @startDate,
      @endDate,
      @evenue,
      @maxMembers
)

SELECT SCOPE_IDENTITY() AS eventId
