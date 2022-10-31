# read-gist-file
Returns contents of selected file from selected gist.

# Inputs
`with:`
- `gist_id` Id of the gist you want to read from.
- `file_name` (Optional) Name of the file you want to read. Defaults to 1st file.

# Example
```yaml
- name: Read gist
  id: gist_content
  uses: gorgbus/read-gist-file@main
  with:
    gist_id: "ce9ca1f249b6a703d5f38b3816da0042"
    file_name: "meta.json"
    
- run: echo "meta.json content: ${{ steps.gist_content.outputs.content }}"
```

# Output
- `steps.gist_content.outputs.content` Content of 1st file/selected file.