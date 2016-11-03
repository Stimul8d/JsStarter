Feature: Buy Tickets
some junk about wanting to buy Tickets as a valued customer

Scenario: Buy a ticket
    Given there is 1 tickets
    When i buy 1 ticket
    Then I have 1 tickets

Scenario: Fail to buy a ticket
    Given there is 0 tickets
    When i buy 1 ticket
    Then i have 0 tickets
    And i get punished with a modal window
