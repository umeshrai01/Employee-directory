from django.db import models
from datetime import date

class Employee(models.Model):
    name = models.CharField(max_length=255)
    dob = models.DateField()
    gender = models.CharField(max_length=10)
    department = models.CharField(max_length=100)
    age = models.PositiveIntegerField(editable=False)  # age is no longer directly editable

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        # Automatically calculate the age based on the date of birth (dob)
        if self.dob:
            today = date.today()
            self.age = today.year - self.dob.year - ((today.month, today.day) < (self.dob.month, self.dob.day))
        super(Employee, self).save(*args, **kwargs)  # Call the parent class save method