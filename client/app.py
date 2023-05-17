
# Bubble
def bubble(list_a):
    last_index = len(list_a) - 1
    sorted = False 
    
    while not sorted:
        sorted = True 
        for i in range(0, last_index): 
            if list_a[i] > list_a[i+1]:
                sorted = False
                list_a[i], list_a[i+1] = list_a[i+1], list_a[i]
    return list_a                
    
print(bubble([100,3,43,42,1,4,200]))    


# Selection
def selection(list_a):
    for i in range(0, len(list_a)-1):
        min_index = i
        
        for j in range(i+1, len(list_a)):
            if list_a[j] < list_a[min_index]:
                min_index = j
                
        if min_index != i:
            list_a[i], list_a[min_index] = list_a[min_index], list_a[i]
            
    return list_a            
    
print(selection([100,3,43,42,1,4,200]))    

# Insertion
def instertion(list_a):
    indexing_range = range(1,len(list_a))
    for i in indexing_range:
        value_to_be_sorted = list_a[i]
        
        while list_a[i-1] > value_to_be_sorted and i > 0:
            list_a[i-1], list_a[i] = list_a[i], list_a[i-1]
            i = i - 1
            
    return list_a        
    
print(instertion([100,2,3,43,42,1,4,200]))    

# quick
def quick(list_a):
    list_len = len(list_a)
    if len(list_a) <= 1:
        return list_a
    else: 
        pivot = list_a.pop()
        
    list_greater = []    
    list_lower = []  

    for i in range(0,list_len-1):
        if list_a[i] > pivot:
          list_greater.append(list_a[i]) 
        else:   
          list_lower.append(list_a[i]) 
           
    return quick(list_lower) + [pivot] + quick(list_greater)           
    
print(quick([100,2,3,43,42,1,4,200]))    

# Binary Search (list has to be sorted)
def binary_search(list_a, ele):
    start_index = 0
    end_index = len(list_a) - 1
    
    while start_index <= end_index:
        midpoint = start_index + (end_index - start_index) // 2
        midpoint_val = list_a[midpoint]
        if midpoint_val == ele:
            return midpoint_val
    
        elif ele < midpoint_val:
            end_index = end_index - 1
        else:
            start_index = start_index + 1

print(binary_search([1, 2, 3, 4, 42, 43, 100, 200], 201))    


# Creating a custom hashmap 
class HashMap: 
    def __init__(self): 
        self.MAX = 100
        self.arr = [None for i in range(self.MAX)]
        
    def get_hash(self, key):
        h = 0
        for k in key:
            h += ord(k)    
        return h % self.MAX
        
    def __setitem__(self,key,value):
        h = self.get_hash(key)
        self.arr[h] = value
        

    def __getitem__(self,key):
        h = self.get_hash(key)
        return self.arr[h]
        
    def __delitem__(self,key):
        h = self.get_hash(key)
        self.arr[h] = None        

t = HashMap()
t['hello'] = 1
t['world'] = 2
print(t['hello'])
print(t['world'])
del t['world']

print(t['world'])


# factorial using loop
def factorial(n): 
    fact = 1
    for i in range(n):
        fact *= i + 1    
    return fact       

print(factorial(2))    
    

def is_prime(num, divisor=2):
    """
    Check whether a given number is prime or not using recursion.
    """
    if num < 2:
        return False
    elif num == 2 or num == 3:
        return True
    elif num % divisor == 0:
        return False
    elif divisor * divisor > num:
        return True
    else:
        return is_prime(num, divisor + 1)

# Test the function
print(is_prime(17))  # True
print(is_prime(10))  # False
print(is_prime(2))   # True



def factorial(n):
    """
    Calculate the factorial of a given number using recursion.
    """
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial(n - 1)

# Test the function
print(factorial(5))  # 120
print(factorial(0))  # 1
print(factorial(1))  # 1


CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100),
  age INT
);


INSERT INTO users (id, name, email, age)
VALUES (1, 'John Doe', 'john@example.com', 30);


UPDATE users
SET age = 31
WHERE id = 1;


DELETE FROM users
WHERE id = 1;


TRUNCATE TABLE table_name;

DROP TABLE table_name;


CREATE INDEX idx_users_id ON users (id);


CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT,
  order_date DATE,
  total_amount DECIMAL(10, 2),
  FOREIGN KEY (user_id) REFERENCES users(id)
);



INSERT INTO orders (id, user_id, order_date, total_amount)
VALUES 
  (1, 1, '2023-04-23', 99.99),
  (2, 2, '2023-04-22', 199.99),
  (3, 1, '2023-04-21', 149.99);


SELECT users.name, orders.order_date, orders.total_amount
FROM users
JOIN orders ON users.id = orders.user_id;



#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'validateRequests' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. STRING_ARRAY blacklisted_ips
#  2. STRING_ARRAY requests
#

def validateRequests(blacklisted_ips, requests):
    
    blacklisted_ips 
    
    req_dict = {}
    
    for i in requests: 
        req_dict[i] = {
            "req_id" : i,
            "num_unblocked_req" : 0,
            "is_blocked": 0,
            "is_first": 0
        }
        
        
    
    
    
    time_in_sec = 1
    for k in req_dict.keys():
        for j in blacklisted_ips:   
            if  regex_j == k:
                req_dict[k]["is_blocked"] = 1
            else: 
                
                req_dict[k]["is_blocked"] = 0
                
                if req_dict[k]["is_first"] == 0:
                    req_dict[k]["is_first"] = 1
                else:                    
                    req_dict[k]["num_unblocked_req"] += 1                
                    
                if req_dict[k]["num_unblocked_req"] == 2:
                    req_dict[k]["is_blocked"] = 1                                                    
                
                if time_in_sec % 5 == 0:
                    req_dict[k] = {
                        "req_id" : k,
                        "num_unblocked_req" : 0,
                        "is_blocked": 0,
                        "is_first": 0
                    }
        time_in_sec += 1                 
                
                    
                
        
    
            
    print(req_dict)        
    # Write your code here


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    blacklisted_ips_count = int(input().strip())

    blacklisted_ips = []

    for _ in range(blacklisted_ips_count):
        blacklisted_ips_item = input()
        blacklisted_ips.append(blacklisted_ips_item)

    requests_count = int(input().strip())

    requests = []

    for _ in range(requests_count):
        requests_item = input()
        requests.append(requests_item)

    result = validateRequests(blacklisted_ips, requests)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()


# LinkedList 
class Node:
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

    def to_dict(self):
        return {
            'data': self.data,
            'next': self.next.to_dict() if self.next else None
        }


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_beg(self, data):
        node = Node(data, self.head)
        self.head = node

    def insert_end(self, data):
        if self.head is None:
            node = Node(data, None)
            self.head = node
            return

        itr = self.head
        while itr.next:
            itr = itr.next
        itr.next = Node(data, None)

    def print_linked_list(self):
        if self.head is None:
            print("Empty linked list")
        itr = self.head
        llstr = ''
        total_len = self.get_length()
        count = 0
        while itr:
            llstr += str(itr.data)

            if total_len - 1 > count:
                llstr += ' ----> '

            itr = itr.next
            count += 1
        print(llstr)

    def bulk_insert(self, _list):
        for i in _list:
            self.insert_end(i)

    def print(self):
        return self.head.to_dict()

    def get_length(self):
        if self.head is None:
            return 0
        itr = self.head
        count = 1
        while itr.next:
            itr = itr.next
            count += 1
        return count

    def insert_at(self, data, idx):
        if idx < 0 or idx >= self.get_length():
            raise Exception("List out of range")

        if self.head is None:
            node = Node(data, None)
            self.head = node
            return

        if idx == 0:
            node = Node(data, self.head)
            self.head = node
            return

        itr = self.head
        count = 0
        while itr:
            if count == idx - 1:
               node = Node(data, itr.next)
               itr.next = node
               break

            itr = itr.next
            count += 1

    def remove_at(self, idx):
        itr = self.head
        count = 0
        while itr:
            if count == idx - 1:
                itr.next = itr.next.next
                break

            itr = itr.next
            count += 1


ll = LinkedList()
# ll.insert_beg(12)
# ll.insert_beg(13)
# ll.insert_end(1)
# ll.insert_end(2)
# ll.insert_end(3)
ll.print_linked_list()
ll.bulk_insert(['aa','bb','cc','dd'])
ll.print_linked_list()
ll.insert_at('zz', 0)
ll.print_linked_list()
ll.remove_at(2)
ll.remove_at(2)
ll.remove_at(2)
ll.print_linked_list()



class A:
    def __init__(self,a):
        self.a = a
        
    def print_a(self):
        return f"Hello {self.a}"
        
class B(A):
    def __init__(self,a,prog):
        super().__init__(a)
        self.prog = prog
        
        
    def print_pro_of_dev(self):        
        return f"{self.a} is learning {self.prog}"



a = B('Anant', 'Python')
print(a.print_a())
print(a.prog)

print(a.print_pro_of_dev())

print(help(B))
        


Amend the name of the clone to 
c732-emr-4x-m6gd.xl
Set Instance type of the 
"Core" Core Instance Group to 
m6gd.xlarge (Note the d)
Set Instance count to 4




Instance type (Dropdown): 
m4.2xlarge
Number of Instances (Number): 
3 (1 master node and 2 work nodes)

General configuration section:

Cluster name (Text): c732-emr-2x-m4.2xl 
(Most other AWS resources including EMR clusters are only scoped within your account and need not be globally unique.)
Logging (Checkbox): Checked
Software configuration section:

Release (Dropdown): emr-6.8.0
Applications (Radio button): Spark
Hardware configuration section:

Instance type (Dropdown): m4.2xlarge
Number of Instances (Number): 
3 (1 master node and 2 work nodes)
Security and access section:

EC2 key pair (Dropdown): No key pair found
(If you have created a key pair in your AWS account previously, you do not need to use one at this time. Choose Proceed without an EC2 key pair.)

Click Create cluster.



How do you balance addressing immediate challenges with 
longer-term strategic goals?


What are some of the biggest challenges facing 
the team right now?


const originalObject = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(originalObject));
deepCopy.b.c = 3;

console.log(originalObject); // { a: 1, b: { c: 2 } }
console.log(deepCopy); // { a: 1, b: { c: 3 } }


const originalArray = [1, 2, 3];
const shallowCopy = [...originalArray]; // or Object.assign([], originalArray);
shallowCopy[0] = 4;

console.log(originalArray); // [1, 2, 3]
console.log(shallowCopy); // [4, 2, 3]




#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'processLogs' function below.
#
# The function is expected to return a STRING_ARRAY.
# The function accepts following parameters:
#  1. STRING_ARRAY logs
#  2. INTEGER maxSpan
#

def processLogs(logs, maxSpan):
    print('logs', logs)
    print('maxSpan', maxSpan)
    
    unique_user_dict = {}
    op = []
    
    for i in logs: 
        log = i.split(' ')
        user_id = -1
        mili_sec = 0
        action = 0
        log_dict = {}
        if log[0] is not None: 
            log_dict["user_id"] = int(log[0])
        if log[1] is not None: 
            log_dict["mili_sec"] = log[1]
        if log[2] is not None: 
            log_dict["action"] = log[2]            
        print('log_dict', log_dict)            
        
        if int(log[0]) not in unique_user_dict:
            unique_user_dict[int(log[0])]= log_dict         
        else: 
            unique_user_dict["maxSpan"] = abs(log[1] -unique_user_dict["mili_sec"])
            
            if unique_user_dict["maxSpan"] < maxSpan:
                op.append(int(log[0]))    
    op.sort()
    
    return op
            
            
            
        
    
    # Write your code here


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    logs_count = int(input().strip())

    logs = []

    for _ in range(logs_count):
        logs_item = input()
        logs.append(logs_item)

    maxSpan = int(input().strip())

    result = processLogs(logs, maxSpan)

    fptr.write('\n'.join(result))
    fptr.write('\n')

    fptr.close()



# /**
# A node can contain Strings, Integers or other nodes. A valid node must contain at least one Integer or one String and valid descendants.
# Assume Node class has the following methods:
# public List<String> getString ()
# public List<Integer> getInteger ()
# public List<Node> getDirectChildren()

# Write a method on Node class to check if a node is valid 
# */
{
    "data": 1, 
    "next" : [
        {
        "data" : 2, 
        "next" : {
            "data" : 'Anat', 
            "next": 
        }
    ]
    
}


class Node: 
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

class LinkedList: 
    def __init__(self):            
        self.head = None
        
  
        
    def is_valid(self, node):
        is_valid = False
        while node:
            # Multiple childrens 
            if isinstance(node.data, array): 
                return is_valid(self, node.next)
            #  Integers or Strings
            elif isinstance(node.data, int)  or  isinstance(node.data, str): 
                is_valid = True
            node = node.next
        return is_valid                
                
        
        
        
        
        
        
Spark Can be used         
        
1. Batch Processing 
2. Interactive Query
3. Streaming 
4. Machine Learning 
5. Graph Processing


You load the data into 
1. Dataframe
2. RDD 
3. Dataset


DataFrame is a distributed collection 
of data organized into named columns. 
It is conceptually equivalent to a table 
in a relational database or a data frame 
in R or Python, but with optimizations 
for distributed processing across 
large datasets.

DataFrame has got schemas

2. Dataframe can be converted into 
RDD and we can find out the number of 
partitions of the RDD 

df5.rdd.getNumPratitions

3. We can also repartition out dataframe 
e.g df.repartition(5)

4. 

# Import the necessary libraries
from pyspark.sql import SparkSession

# Create a SparkSession
spark = SparkSession
            .builder
            .appName("LoadSampleData")
            .getOrCreate()

# Load the sample data into a DataFrame
df = spark
        .read
        .format("csv")
        .option("header", "true")
        .load("sample_data.csv")

# Print the schema of the DataFrame
df.printSchema()

# Select one attribute from the DataFrame
selected_df = df.select("attribute_name")

# Print the selected attribute
selected_df.show()


# Import the necessary libraries
from pyspark.sql import SparkSession
from pyspark.sql.functions import col

# Create a SparkSession
spark = SparkSession.builder.appName("LeftJoinExample").getOrCreate()

# Create the first DataFrame
df1 = spark.createDataFrame([(1, "John"), (2, "Mary"), (3, "Mike")], ["id", "name"])

# Create the second DataFrame
df2 = spark.createDataFrame([(1, "Sales"), (2, "Marketing"), (4, "IT")], ["id", "dept"])

# Perform a left join on the two DataFrames
joined_df = df1.join(df2, on="id", how="left")

# Print the joined DataFrame
joined_df.show()


# Import the necessary libraries
from pyspark.sql import SparkSession

# Create a SparkSession
spark = SparkSession.builder.appName("RawSQLQueryExample").getOrCreate()

# Create the DataFrame
df = spark.createDataFrame([(1, "John", "Sales"), (2, "Mary", "Marketing"), (3, "Mike", "IT")], ["id", "name", "dept"])

# Register the DataFrame as a temporary view
df.createOrReplaceTempView("employee")

# Write a raw SQL query using the temporary view
query = "SELECT name, dept FROM employee WHERE id > 1"

# Execute the SQL query and store the results in a DataFrame
result_df = spark.sql(query)

# Print the result DataFrame
result_df.show()



Atomicity: This property ensures that a transaction is treated as a single, 
indivisible unit of work. If any part of the transaction fails, the entire 
transaction is rolled back and all changes made during the transaction are undone.

Consistency: This property ensures that a transaction brings the database 
from one valid state to another. In other words, the transaction must 
adhere to any constraints or rules defined in the database schema 
and not violate any data integrity constraints.

Isolation: This property ensures that concurrent transactions do not 
interfere with each other. Each transaction must be executed in isolation, 
as if it were the only transaction being executed at the time.

Durability: This property ensures that once a transaction is committed, 
its changes will survive any subsequent failures, such as power outages or 
system crashes. The changes made during the transaction must be permanent and 
stored in a non-volatile memory, such as a hard disk.

reliable, consistent, and secure, 




Cassandra and MongoDB are both NoSQL databases, 
and they do not fully comply with the traditional ACID properties as 
they are designed to offer different trade-offs in terms of consistency, 
availability, and partition tolerance.

Cassandra provides a tunable consistency model that allows you to 
trade-off consistency for availability and partition tolerance, which 
is often called eventual consistency. In Cassandra, writes are durable 
and atomic, but reads may not return the most recent write. This means 
that Cassandra does not strictly enforce consistency at all times but 
guarantees eventual consistency.

MongoDB, on the other hand, provides transaction support in recent versions, 
but it is still not fully ACID compliant. MongoDB supports multi-document 
transactions, but they only provide atomicity and isolation, and not strong consistency.

In summary, Cassandra and MongoDB do not strictly follow the traditional 
ACID properties as they are designed to provide high availability, scalability, 
and partition tolerance, with a trade-off in terms of consistency. However, 
they do provide some level of transactional support that can be used to 
maintain data integrity and reliability.


In this lesson, we will learn about database transactions 
and isolation levels, understanding the read phenomena and key points in database systems.
SQL (Structured Query Language) is highly popular and is widely used among developers and companies to create, modify, and query relational databases in an efficient and intuitive manner.
To perform operations on database tables, we execute a SQL query.
Transactions commits or rollbacks performed reads and writes of values in the database, thus ensuring that any single operation is a collection of several smaller ones.
Multiple transactions executing simultaneously can cause inconsistencies in the database, which can be prevented by the ACID properties, with a special emphasis on isolation.
Concurrent transactions can lead to Dirty Read, Non-repeatable Read and Phantom Read issues when accessing the same resource at the same time.
The results of a transaction are either committed permanently, or rolled back if unsuccessful.
We are discussing Isolation Levels, which dictate how much a certain transaction needs to be isolated from other transactions in a SQL database system.
Using varying isolation levels, you can choose to either allow or prevent Dirty Reads, Non-repeatable Reads, and Phantom Reads.


Hi everyone, 

Thanks for taking time to take my interview. For the part of my review prociess I tried my level best to answer 
all the questions clearly and consily.

1. the coding round went well this time and I could able to answer both the questions within the given time frame.
2. the next round was design where I had to create a filesystem to create a file and print all the file. 
I could able to write a pueso code that best fits the the requirement with in the given time frame. 
the next question was about designing the backend architecutr of Twitter. I feel here I could only be able to 
give a high level understading of what APIs I would be creating.

Overall, I feel confident about today's interview process. Thanks again. Would like to know the feedback soon.









Software Development Engineer - Big Data Service 
JR-76161
https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/Software-Development-Engineer---Big-Data-Service_JR-76161


Software Development Engineer
JR-77378
https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/Software-Development-Engineer_JR-77378

Associate Software Development Engineer, Machine Learning
JR-78223
https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/Associate-Software-Development-Engineer--Machine-Learning_JR-78223-1

Full Stack Engineer - Employee Experience Journeys
JR-77001
https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/Fullstack-Engineer---Employee-Experience-Journeys_JR-77001

Senior Software Development Engineer
JR-76109
https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/Senior-Software-Development-Engineer_JR-76109

Software Development Engineer - Search Experience
JR-78194

https://workday.wd5.myworkdayjobs.com/en-US/Workday/job/Software-Development-Engineer---Search-Experience_JR-78194

Software Development Engineer - Knowledge Management
JR-77011

Link Not Availble
