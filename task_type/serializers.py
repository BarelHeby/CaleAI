from rest_framework import serializers
from task_type.models import TaskType


class TaskSerializer(serializers.ModelSerializer):
    """
    Serializer for the Task model.
    """

    class Meta:
        model = TaskType
        fields = '__all__'  # Include all fields of the Task model
    def create(self, validated_data):
        taskType = TaskType.objects.create(
            id=validated_data['id'],
            name=validated_data.get('name', ''),  # Handle optional fields
            color=validated_data.get('color', ''),
        )
        taskType.save()
        return taskType

    def update(self, instance, validated_data):
        instance.id = validated_data.get('id', instance.id)
        instance.name = validated_data.get('name', instance.name)  # Handle optional fields
        instance.color = validated_data.get('color', instance.color)

        instance.save()
        return instance

    # def to_representation(self, instance):
    #     """
    #     Overrides the default behavior to exclude the password field during retrieval.
    #     """
    #     representation = super().to_representation(instance)
    #     # Remove password from representation
    #     representation.pop('password', None)
    #     representation.pop('token', None)
    #     return representation
