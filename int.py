# two sum
# for i in range(len(nums)):
#     for j in range(len(nums)+1):
#         if nums[i]+nums[j]==target:
#             return [i,j]


# two sum
# seen={}
# for i, num in enumerate(nums):
#     complement = target - num
#     if complement in seen:
#         return [seen[complement], i]
#     seen[num] = i



# find maximum and second maximum
# arr=[2,4,7,4,2,7,9,8]
# def sec_largest(arr):
#     max=0
#     sec_max=0
#     for i in range(len(arr)):
#         if arr[i]>max:
#             sec_max=max
#             max=arr[i]
#         elif arr[i]>sec_max and arr[i]!=max:
#             sec_max=arr[i]
#     return max, sec_max

# print(sec_largest(arr))


#reverse an array
# nums = [1, 2, 3, 4, 5]
# arr=[]
# for i in range(len(nums)-1,-1,-1):
#     arr.append(nums[i])
# print(arr)


# nums=[3,2,4,7,1]
# left=0
# right=len(nums)-1
# while left<right:
#     nums[left],nums[right]=nums[right],nums[left]
#     left+=1
#     right-=1
# print(nums)


#Move zeros
# nums = [2, 0, 5, 0, 3, 0, 4]
# arr=[]
# count=0
# for i in range(len(nums)):
#     if nums[i]!=0:
#         arr.append(nums[i])
#     if nums[i]==0:
#         count+=1

# for i in range(count):
#     arr.append(0)

# print(arr)


# nums = [2, 0, 5, 0, 3, 0, 4]
# pos=0

# for i in range(len(nums)):
#     if nums[i]!=0:
#         nums[pos],nums[i]=nums[i],nums[pos]
#         pos+=1

# print(nums)











