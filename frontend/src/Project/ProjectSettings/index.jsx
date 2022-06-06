import React from 'react';
import PropTypes from 'prop-types';

import { ProjectCategory, ProjectCategoryCopy } from 'shared/constants/projects';
import toast from 'shared/utils/toast';
import useApi from 'shared/hooks/api';
import { Form, Breadcrumbs } from 'shared/components';

import { FormCont, FormHeading, FormElement, ActionButton } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
};

const ProjectSettings = ({ project, fetchProject }) => {
  const [{ isUpdating }, updateProject] = useApi.patch('/project');

  return (
    <Form
      initialValues={Form.initialValues(project, get => ({
        name: get('title'),
        category: get('category'),
        description: get('description'),
      }))}
      validations={{
        name: [Form.is.required(), Form.is.maxLength(100)],
        category: Form.is.required(),
      }}
      onSubmit={async (values, form) => {
        try {
          await updateProject({
            ...values,
            id: project.id,
            title: values.name,
          });
          await fetchProject();
          toast.success('Changes have been saved successfully.');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormCont>
        <FormElement>
          <Breadcrumbs items={['Projects', project.title, 'Project Details']} />
          <FormHeading>Project Details</FormHeading>

          <Form.Field.Input name="name" label="Name" />
          <Form.Field.TextEditor
            name="description"
            label="Description"
            tip="Describe the project in as much detail as you'd like."
          />
          <Form.Field.Select name="category" label="Project Category" options={categoryOptions} />

          <ActionButton type="submit" variant="primary" isWorking={isUpdating}>
            Save changes
          </ActionButton>
        </FormElement>
      </FormCont>
    </Form>
  );
};

const categoryOptions = Object.values(ProjectCategory).map(category => ({
  value: category,
  label: ProjectCategoryCopy[category],
}));

ProjectSettings.propTypes = propTypes;

export default ProjectSettings;
