
select Max(Salary)  SecondHighestSalary

from Employee where (select Max(Salary)from Employee) > Salary